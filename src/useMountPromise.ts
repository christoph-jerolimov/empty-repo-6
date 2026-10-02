import { usePromise } from './usePromise.ts';
import type { PromiseSource, PromiseState } from './types.ts';

/**
 * Awaits a promise exactly once, when the component mounts, and tracks its
 * settlement state. Later renders never re-await, even if a different
 * `promise` is passed. Nothing is updated after unmount.
 *
 * Equivalent to `usePromise(promise, [])`.
 */
export function useMountPromise<T>(promise: PromiseSource<T>): PromiseState<T> {
  return usePromise(promise, []);
}
