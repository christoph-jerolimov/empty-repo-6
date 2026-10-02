/**
 * A promise, or a function that creates one.
 *
 * Passing a function is preferred: it lets the hook decide *when* the promise
 * is created, so it is only started when the hook actually runs it.
 */
export type PromiseOrFactory<T> = Promise<T> | (() => Promise<T>);

/** State returned by {@link usePromise} and {@link useMountPromise}. */
export type PromiseState<T> =
  | {
      status: "pending";
      loading: true;
      value: undefined;
      error: undefined;
    }
  | {
      status: "fulfilled";
      loading: false;
      value: T;
      error: undefined;
    }
  | {
      status: "rejected";
      loading: false;
      value: undefined;
      error: unknown;
    };

export const PENDING: PromiseState<never> = {
  status: "pending",
  loading: true,
  value: undefined,
  error: undefined,
};

export function resolvePromise<T>(promise: PromiseOrFactory<T>): Promise<T> {
  return typeof promise === "function" ? promise() : promise;
}
