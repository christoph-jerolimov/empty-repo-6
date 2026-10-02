import { usePromise } from "./usePromise.ts";
import type { PromiseOrFactory, PromiseState } from "./types.ts";

/**
 * Runs a promise exactly once, when the component mounts, and tracks its
 * state. Equivalent to `usePromise(promise, [])`.
 *
 * @example
 * const { loading, value } = useMountPromise(() => loadSettings());
 */
export function useMountPromise<T>(promise: PromiseOrFactory<T>): PromiseState<T> {
  return usePromise(promise, []);
}
