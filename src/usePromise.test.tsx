import { act, renderHook, waitFor } from "@testing-library/react";

import { deferred, flushMicrotasks } from "./test/deferred.js";
import type { PromiseState } from "./types.js";
import { usePromise } from "./usePromise.js";

describe("usePromise", () => {
  it("starts pending", () => {
    const { result } = renderHook(() => usePromise(new Promise<number>(() => undefined)));
    expect(result.current).toEqual({
      status: "pending",
      value: undefined,
      error: undefined,
      isPending: true,
      isFulfilled: false,
      isRejected: false,
    });
  });

  it("becomes fulfilled when the promise resolves", async () => {
    const { promise, resolve } = deferred<string>();
    const { result } = renderHook(() => usePromise(promise));

    await act(async () => {
      resolve("hello");
    });

    expect(result.current).toEqual({
      status: "fulfilled",
      value: "hello",
      error: undefined,
      isPending: false,
      isFulfilled: true,
      isRejected: false,
    });
  });

  it("becomes rejected when the promise rejects", async () => {
    const { promise, reject } = deferred<string>();
    const error = new Error("nope");
    const { result } = renderHook(() => usePromise(promise));

    await act(async () => {
      reject(error);
    });

    expect(result.current).toEqual({
      status: "rejected",
      value: undefined,
      error,
      isPending: false,
      isFulfilled: false,
      isRejected: true,
    });
  });

  it("accepts a factory and passes it an AbortSignal", async () => {
    const factory = vi.fn((_signal: AbortSignal) => Promise.resolve(7));
    const { result } = renderHook(() => usePromise(factory));

    await waitFor(() => expect(result.current.status).toBe("fulfilled"));

    expect(result.current.value).toBe(7);
    expect(factory).toHaveBeenCalledOnce();
    expect(factory.mock.calls[0]?.[0]).toBeInstanceOf(AbortSignal);
  });

  it("turns a synchronous throw inside the factory into a rejection", async () => {
    const error = new Error("sync");
    const { result } = renderHook(() =>
      usePromise(() => {
        throw error;
      }),
    );

    await waitFor(() => expect(result.current.status).toBe("rejected"));
    expect(result.current.error).toBe(error);
  });

  describe("without deps", () => {
    it("runs a factory only once, even if a new function is passed on re-render", async () => {
      const factory = vi.fn(() => Promise.resolve("once"));
      const { result, rerender } = renderHook(() => usePromise(() => factory()));

      await waitFor(() => expect(result.current.status).toBe("fulfilled"));
      rerender();
      rerender();
      await flushMicrotasks();

      expect(factory).toHaveBeenCalledOnce();
      expect(result.current.value).toBe("once");
    });

    it("re-runs when a different promise instance is passed", async () => {
      const first = Promise.resolve("first");
      const second = Promise.resolve("second");
      const { result, rerender } = renderHook(({ promise }) => usePromise(promise), {
        initialProps: { promise: first },
      });

      await waitFor(() => expect(result.current.value).toBe("first"));

      rerender({ promise: second });
      expect(result.current.status).toBe("pending");
      await waitFor(() => expect(result.current.value).toBe("second"));
    });

    it("does not re-run when the same promise instance is passed again", async () => {
      const promise = Promise.resolve("same");
      const { result, rerender } = renderHook(({ promise }) => usePromise(promise), {
        initialProps: { promise },
      });

      await waitFor(() => expect(result.current.value).toBe("same"));
      rerender({ promise });
      expect(result.current.status).toBe("fulfilled");
    });
  });

  describe("with deps", () => {
    it("re-runs the factory when deps change and resets to pending", async () => {
      const factory = vi.fn((id: number) => Promise.resolve(`user-${id}`));
      const { result, rerender } = renderHook(({ id }) => usePromise(() => factory(id), [id]), {
        initialProps: { id: 1 },
      });

      await waitFor(() => expect(result.current.value).toBe("user-1"));

      rerender({ id: 2 });
      expect(result.current.status).toBe("pending");
      await waitFor(() => expect(result.current.value).toBe("user-2"));
      expect(factory).toHaveBeenCalledTimes(2);
    });

    it("does not re-run when deps are unchanged", async () => {
      const factory = vi.fn(() => Promise.resolve("stable"));
      const { result, rerender } = renderHook(({ id }) => usePromise(() => factory(), [id]), {
        initialProps: { id: 1 },
      });

      await waitFor(() => expect(result.current.status).toBe("fulfilled"));
      rerender({ id: 1 });
      await flushMicrotasks();
      expect(factory).toHaveBeenCalledOnce();
    });

    it("ignores results from superseded runs", async () => {
      const slow = deferred<string>();
      const fast = deferred<string>();
      const { result, rerender } = renderHook(({ d }) => usePromise(() => d.promise, [d]), {
        initialProps: { d: slow },
      });

      rerender({ d: fast });
      await act(async () => {
        fast.resolve("fast");
      });
      expect(result.current.value).toBe("fast");

      await act(async () => {
        slow.resolve("slow");
      });
      expect(result.current.value).toBe("fast");
    });

    it("aborts the previous factory's signal when re-running", async () => {
      const signals: AbortSignal[] = [];
      const { rerender } = renderHook(
        ({ id }) =>
          usePromise(
            (signal) => {
              signals.push(signal);
              return new Promise<number>(() => undefined);
            },
            [id],
          ),
        { initialProps: { id: 1 } },
      );

      rerender({ id: 2 });

      expect(signals).toHaveLength(2);
      expect(signals[0]?.aborted).toBe(true);
      expect(signals[1]?.aborted).toBe(false);
    });
  });

  describe("unmount", () => {
    it("aborts the signal and never updates state afterwards", async () => {
      const { promise, resolve } = deferred<string>();
      let seen: AbortSignal | undefined;
      const { result, unmount } = renderHook(() =>
        usePromise((signal) => {
          seen = signal;
          return promise;
        }),
      );

      unmount();
      expect(seen?.aborted).toBe(true);

      resolve("late");
      await flushMicrotasks();
      expect(result.current.status).toBe("pending");
    });
  });

  describe("types", () => {
    it("narrows value and error through the discriminated union", () => {
      const { result } = renderHook(() => usePromise(Promise.resolve(1)));
      const state: PromiseState<number> = result.current;

      expectTypeOf(state.value).toEqualTypeOf<number | undefined>();
      if (state.status === "fulfilled") {
        expectTypeOf(state.value).toEqualTypeOf<number>();
        expectTypeOf(state.error).toEqualTypeOf<undefined>();
      }
      if (state.isRejected) {
        expectTypeOf(state.value).toEqualTypeOf<undefined>();
        expectTypeOf(state.error).toEqualTypeOf<unknown>();
      }
      if (state.isPending) {
        expectTypeOf(state.value).toEqualTypeOf<undefined>();
      }
    });

    it("infers the value type from factories and promises alike", () => {
      renderHook(() => {
        expectTypeOf(usePromise(Promise.resolve("s"))).toEqualTypeOf<PromiseState<string>>();
        expectTypeOf(usePromise(() => Promise.resolve(1))).toEqualTypeOf<PromiseState<number>>();
        expectTypeOf(usePromise(() => true)).toEqualTypeOf<PromiseState<boolean>>();
      });
    });
  });
});
