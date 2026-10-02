/**
 * A factory that produces a promise. It receives an {@link AbortSignal} that is
 * aborted when the hook re-runs (because its dependencies changed) or when the
 * component unmounts, so the work can be cancelled early, e.g. with `fetch`.
 */
export type PromiseFactory<T> = (signal: AbortSignal) => PromiseLike<T> | T;

/**
 * Anything the hooks accept: an existing promise (or any thenable) or a
 * factory that creates one.
 */
export type PromiseInput<T> = PromiseLike<T> | PromiseFactory<T>;

/** The promise has not settled yet. */
export interface PendingPromiseState {
  readonly status: "pending";
  readonly value: undefined;
  readonly error: undefined;
  readonly isPending: true;
  readonly isFulfilled: false;
  readonly isRejected: false;
}

/** The promise resolved with `value`. */
export interface FulfilledPromiseState<T> {
  readonly status: "fulfilled";
  readonly value: T;
  readonly error: undefined;
  readonly isPending: false;
  readonly isFulfilled: true;
  readonly isRejected: false;
}

/** The promise rejected with `error`. */
export interface RejectedPromiseState {
  readonly status: "rejected";
  readonly value: undefined;
  readonly error: unknown;
  readonly isPending: false;
  readonly isFulfilled: false;
  readonly isRejected: true;
}

/**
 * A discriminated union describing the current state of a promise. Narrow on
 * `status` (or on the `is*` booleans) to get a typed `value` / `error`.
 */
export type PromiseState<T> = PendingPromiseState | FulfilledPromiseState<T> | RejectedPromiseState;
