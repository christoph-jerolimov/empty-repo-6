import { act, renderHook, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vite-plus/test";
import { usePromise } from "../src/index.ts";
import { deferred } from "./deferred.ts";

describe("usePromise", () => {
  test("starts in the pending state", () => {
    const { result } = renderHook(() => usePromise(() => deferred<string>().promise));

    expect(result.current).toEqual({
      status: "pending",
      loading: true,
      value: undefined,
      error: undefined,
    });
  });

  test("exposes the value once the promise is fulfilled", async () => {
    const { result } = renderHook(() => usePromise(() => Promise.resolve(42)));

    await waitFor(() => expect(result.current.status).toBe("fulfilled"));

    expect(result.current).toEqual({
      status: "fulfilled",
      loading: false,
      value: 42,
      error: undefined,
    });
  });

  test("exposes the error once the promise is rejected", async () => {
    const error = new Error("boom");
    const { result } = renderHook(() => usePromise(() => Promise.reject(error)));

    await waitFor(() => expect(result.current.status).toBe("rejected"));

    expect(result.current).toEqual({
      status: "rejected",
      loading: false,
      value: undefined,
      error,
    });
  });

  test("accepts a promise instance instead of a factory", async () => {
    const { result } = renderHook(() => usePromise(Promise.resolve("direct")));

    await waitFor(() => expect(result.current.value).toBe("direct"));
  });

  test("runs the factory only once when deps are omitted", async () => {
    const factory = vi.fn(() => Promise.resolve("once"));
    const { result, rerender } = renderHook(() => usePromise(factory));

    await waitFor(() => expect(result.current.status).toBe("fulfilled"));
    rerender();
    rerender();

    expect(factory).toHaveBeenCalledTimes(1);
    expect(result.current.value).toBe("once");
  });

  test("does not re-run when deps are unchanged", async () => {
    const factory = vi.fn((id: number) => Promise.resolve(`user-${id}`));
    const { result, rerender } = renderHook(({ id }) => usePromise(() => factory(id), [id]), {
      initialProps: { id: 1 },
    });

    await waitFor(() => expect(result.current.value).toBe("user-1"));
    rerender({ id: 1 });

    expect(factory).toHaveBeenCalledTimes(1);
  });

  test("re-runs and resets to pending when deps change", async () => {
    const factory = vi.fn((id: number) => Promise.resolve(`user-${id}`));
    const { result, rerender } = renderHook(({ id }) => usePromise(() => factory(id), [id]), {
      initialProps: { id: 1 },
    });

    await waitFor(() => expect(result.current.value).toBe("user-1"));

    const pending = deferred<string>();
    factory.mockImplementationOnce(() => pending.promise);
    rerender({ id: 2 });

    await waitFor(() => expect(result.current.status).toBe("pending"));
    expect(result.current.value).toBeUndefined();

    await act(async () => {
      pending.resolve("user-2");
      await pending.promise;
    });

    expect(factory).toHaveBeenCalledTimes(2);
    expect(result.current).toMatchObject({ status: "fulfilled", value: "user-2" });
  });

  test("ignores the result of a stale run that settles after deps changed", async () => {
    const first = deferred<string>();
    const second = deferred<string>();
    const promises = [first.promise, second.promise];
    const { result, rerender } = renderHook(({ id }) => usePromise(() => promises[id]!, [id]), {
      initialProps: { id: 0 },
    });

    rerender({ id: 1 });

    await act(async () => {
      second.resolve("second");
      await second.promise;
    });
    expect(result.current.value).toBe("second");

    await act(async () => {
      first.resolve("first");
      await first.promise;
    });
    expect(result.current.value).toBe("second");
  });

  test("ignores a rejection from a stale run", async () => {
    const first = deferred<string>();
    const second = deferred<string>();
    const promises = [first.promise, second.promise];
    const { result, rerender } = renderHook(({ id }) => usePromise(() => promises[id]!, [id]), {
      initialProps: { id: 0 },
    });

    rerender({ id: 1 });

    await act(async () => {
      first.reject(new Error("stale"));
      await first.promise.catch(() => undefined);
    });
    expect(result.current.status).toBe("pending");

    await act(async () => {
      second.resolve("fresh");
      await second.promise;
    });
    expect(result.current).toMatchObject({ status: "fulfilled", value: "fresh" });
  });

  test("does not update state after the component unmounted", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => undefined);
    const pending = deferred<string>();
    const { result, unmount } = renderHook(() => usePromise(() => pending.promise));

    unmount();

    await act(async () => {
      pending.resolve("too late");
      await pending.promise;
    });

    expect(result.current.status).toBe("pending");
    expect(errorSpy).not.toHaveBeenCalled();
    errorSpy.mockRestore();
  });

  test("keeps the pending state object stable across pending re-runs", async () => {
    const pending = deferred<string>();
    const { result, rerender } = renderHook(({ id }) => usePromise(() => pending.promise, [id]), {
      initialProps: { id: 0 },
    });
    const initial = result.current;

    rerender({ id: 1 });
    await act(async () => {});

    expect(result.current).toBe(initial);
  });
});
