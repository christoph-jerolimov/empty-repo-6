import { renderHook } from "@testing-library/react";
import { describe, expect, test, vi } from "vite-plus/test";
import { useUnmountPromise } from "../src/index.ts";

describe("useUnmountPromise", () => {
  test("does not run the factory on mount or re-render", () => {
    const factory = vi.fn(() => Promise.resolve());
    const { rerender } = renderHook(() => useUnmountPromise(factory));

    rerender();
    rerender();

    expect(factory).not.toHaveBeenCalled();
  });

  test("runs the factory exactly once on unmount", () => {
    const factory = vi.fn(() => Promise.resolve());
    const { unmount } = renderHook(() => useUnmountPromise(factory));

    unmount();

    expect(factory).toHaveBeenCalledTimes(1);
  });

  test("returns nothing", () => {
    const { result } = renderHook(() => useUnmountPromise(() => Promise.resolve()));

    expect(result.current).toBeUndefined();
  });

  test("uses the latest factory passed before unmount", () => {
    const first = vi.fn(() => Promise.resolve());
    const second = vi.fn(() => Promise.resolve());
    const { rerender, unmount } = renderHook(({ factory }) => useUnmountPromise(factory), {
      initialProps: { factory: first },
    });

    rerender({ factory: second });
    unmount();

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });

  test("closes over the latest props", () => {
    const save = vi.fn((draft: string) => Promise.resolve(draft));
    const { rerender, unmount } = renderHook(({ draft }) => useUnmountPromise(() => save(draft)), {
      initialProps: { draft: "v1" },
    });

    rerender({ draft: "v2" });
    rerender({ draft: "v3" });
    unmount();

    expect(save).toHaveBeenCalledTimes(1);
    expect(save).toHaveBeenCalledWith("v3");
  });

  test("lets the returned promise settle after the component is gone", async () => {
    let resolve!: () => void;
    const done = new Promise<void>((res) => {
      resolve = res;
    });
    const sideEffect = vi.fn();
    const { unmount } = renderHook(() =>
      useUnmountPromise(() => done.then(() => sideEffect("flushed"))),
    );

    unmount();
    expect(sideEffect).not.toHaveBeenCalled();

    resolve();
    await done;
    await Promise.resolve();

    expect(sideEffect).toHaveBeenCalledWith("flushed");
  });
});
