import { act, renderHook, waitFor } from "@testing-library/react";

import { deferred, flushMicrotasks } from "./test/deferred.js";
import { useMountPromise } from "./useMountPromise.js";

describe("useMountPromise", () => {
  it("starts pending and becomes fulfilled", async () => {
    const { promise, resolve } = deferred<number>();
    const { result } = renderHook(() => useMountPromise(promise));

    expect(result.current.status).toBe("pending");
    await act(async () => {
      resolve(3);
    });
    expect(result.current).toMatchObject({ status: "fulfilled", value: 3, isFulfilled: true });
  });

  it("becomes rejected when the promise rejects", async () => {
    const error = new Error("mount failed");
    const { result } = renderHook(() => useMountPromise(() => Promise.reject(error)));

    await waitFor(() => expect(result.current.status).toBe("rejected"));
    expect(result.current).toMatchObject({ error, isRejected: true });
  });

  it("invokes the factory with an AbortSignal", async () => {
    const factory = vi.fn((_signal: AbortSignal) => Promise.resolve("ok"));
    const { result } = renderHook(() => useMountPromise(factory));

    await waitFor(() => expect(result.current.status).toBe("fulfilled"));
    expect(factory.mock.calls[0]?.[0]).toBeInstanceOf(AbortSignal);
  });

  it("runs exactly once and ignores later inputs", async () => {
    const first = vi.fn(() => Promise.resolve("first"));
    const second = vi.fn(() => Promise.resolve("second"));
    const { result, rerender } = renderHook(({ factory }) => useMountPromise(factory), {
      initialProps: { factory: first },
    });

    await waitFor(() => expect(result.current.value).toBe("first"));

    rerender({ factory: second });
    rerender({ factory: second });
    await flushMicrotasks();

    expect(first).toHaveBeenCalledOnce();
    expect(second).not.toHaveBeenCalled();
    expect(result.current.value).toBe("first");
  });

  it("aborts on unmount and never updates state afterwards", async () => {
    const { promise, resolve } = deferred<string>();
    let seen: AbortSignal | undefined;
    const { result, unmount } = renderHook(() =>
      useMountPromise((signal) => {
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
