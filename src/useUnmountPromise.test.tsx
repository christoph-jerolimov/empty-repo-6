import { renderHook } from "@testing-library/react";

import { flushMicrotasks } from "./test/deferred.js";
import { useUnmountPromise } from "./useUnmountPromise.js";

describe("useUnmountPromise", () => {
  it("does not run on mount or on re-render", () => {
    const factory = vi.fn(() => Promise.resolve());
    const { rerender } = renderHook(() => useUnmountPromise(factory));

    rerender();
    rerender();

    expect(factory).not.toHaveBeenCalled();
  });

  it("runs exactly once on unmount", () => {
    const factory = vi.fn(() => Promise.resolve());
    const { unmount } = renderHook(() => useUnmountPromise(factory));

    unmount();

    expect(factory).toHaveBeenCalledOnce();
  });

  it("returns nothing", () => {
    const { result } = renderHook(() => useUnmountPromise(() => Promise.resolve()));
    expect(result.current).toBeUndefined();
  });

  it("uses the factory from the latest render", () => {
    const calls: string[] = [];
    const { rerender, unmount } = renderHook(
      ({ draft }) =>
        useUnmountPromise(async () => {
          calls.push(draft);
        }),
      { initialProps: { draft: "v1" } },
    );

    rerender({ draft: "v2" });
    rerender({ draft: "v3" });
    unmount();

    expect(calls).toEqual(["v3"]);
  });

  it("subscribes to a thenable on unmount", async () => {
    const then = vi.fn();
    const thenable: PromiseLike<string> = {
      then(onFulfilled) {
        then();
        return Promise.resolve("done").then(onFulfilled);
      },
    };
    const { unmount } = renderHook(() => useUnmountPromise(thenable));

    expect(then).not.toHaveBeenCalled();
    unmount();
    await flushMicrotasks();
    expect(then).toHaveBeenCalledOnce();
  });

  it("awaits the factory's promise without blocking unmount", async () => {
    let settled = false;
    const { unmount } = renderHook(() =>
      useUnmountPromise(async () => {
        await flushMicrotasks();
        settled = true;
      }),
    );

    unmount();
    expect(settled).toBe(false);
    await flushMicrotasks();
    await flushMicrotasks();
    expect(settled).toBe(true);
  });
});
