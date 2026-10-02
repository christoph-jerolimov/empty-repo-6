import { act, renderHook, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vite-plus/test";
import { useMountPromise } from "../src/index.ts";
import { deferred } from "./deferred.ts";

describe("useMountPromise", () => {
  test("starts in the pending state", () => {
    const { result } = renderHook(() => useMountPromise(() => deferred<number>().promise));

    expect(result.current).toEqual({
      status: "pending",
      loading: true,
      value: undefined,
      error: undefined,
    });
  });

  test("runs the factory once on mount", async () => {
    const factory = vi.fn(() => Promise.resolve("mounted"));
    const { result } = renderHook(() => useMountPromise(factory));

    expect(factory).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(result.current.status).toBe("fulfilled"));
    expect(result.current.value).toBe("mounted");
  });

  test("does not re-run on re-render, even with a new factory", async () => {
    const first = vi.fn(() => Promise.resolve("first"));
    const second = vi.fn(() => Promise.resolve("second"));
    const { result, rerender } = renderHook(({ factory }) => useMountPromise(factory), {
      initialProps: { factory: first },
    });

    await waitFor(() => expect(result.current.value).toBe("first"));
    rerender({ factory: second });
    rerender({ factory: second });

    expect(first).toHaveBeenCalledTimes(1);
    expect(second).not.toHaveBeenCalled();
    expect(result.current.value).toBe("first");
  });

  test("accepts a promise instance", async () => {
    const { result } = renderHook(() => useMountPromise(Promise.resolve(7)));

    await waitFor(() => expect(result.current.value).toBe(7));
  });

  test("exposes a rejection", async () => {
    const error = new Error("mount failed");
    const { result } = renderHook(() => useMountPromise(() => Promise.reject(error)));

    await waitFor(() => expect(result.current.status).toBe("rejected"));
    expect(result.current.error).toBe(error);
    expect(result.current.loading).toBe(false);
  });

  test("ignores a result that arrives after unmount", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => undefined);
    const pending = deferred<string>();
    const { result, unmount } = renderHook(() => useMountPromise(() => pending.promise));

    unmount();
    await act(async () => {
      pending.resolve("late");
      await pending.promise;
    });

    expect(result.current.status).toBe("pending");
    expect(errorSpy).not.toHaveBeenCalled();
    errorSpy.mockRestore();
  });
});
