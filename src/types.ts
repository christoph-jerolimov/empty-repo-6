/**
 * Either a promise, or a function that creates one. Passing a function lets
 * the hook create the promise lazily, inside an effect, instead of on every
 * render.
 */
export type PromiseSource<T> = Promise<T> | (() => Promise<T>);

/** The promise has not settled yet. */
export interface PendingPromiseState {
  status: 'pending';
  value: undefined;
  error: undefined;
}

/** The promise resolved with `value`. */
export interface FulfilledPromiseState<T> {
  status: 'fulfilled';
  value: T;
  error: undefined;
}

/** The promise rejected with `error`. */
export interface RejectedPromiseState {
  status: 'rejected';
  value: undefined;
  error: unknown;
}

/**
 * The settlement state of a promise, mirroring the names used by
 * `Promise.allSettled`.
 */
export type PromiseState<T> =
  | PendingPromiseState
  | FulfilledPromiseState<T>
  | RejectedPromiseState;

export const PENDING: PendingPromiseState = Object.freeze({
  status: 'pending',
  value: undefined,
  error: undefined,
}) as PendingPromiseState;

/** Resolves a `PromiseSource` into a promise. */
export function toPromise<T>(source: PromiseSource<T>): Promise<T> {
  return typeof source === 'function' ? source() : source;
}
