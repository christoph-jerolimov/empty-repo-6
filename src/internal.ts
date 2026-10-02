import type {
  FulfilledPromiseState,
  PendingPromiseState,
  PromiseFactory,
  PromiseInput,
  PromiseState,
  RejectedPromiseState,
} from "./types.js";

export const PENDING: PendingPromiseState = Object.freeze({
  status: "pending",
  value: undefined,
  error: undefined,
  isPending: true,
  isFulfilled: false,
  isRejected: false,
});

export function fulfilled<T>(value: T): FulfilledPromiseState<T> {
  return {
    status: "fulfilled",
    value,
    error: undefined,
    isPending: false,
    isFulfilled: true,
    isRejected: false,
  };
}

export function rejected(error: unknown): RejectedPromiseState {
  return {
    status: "rejected",
    value: undefined,
    error,
    isPending: false,
    isFulfilled: false,
    isRejected: true,
  };
}

/** Returns `true` when the input is a factory rather than a promise/thenable. */
export function isPromiseFactory<T>(input: PromiseInput<T>): input is PromiseFactory<T> {
  return typeof input === "function";
}

/**
 * Turns a {@link PromiseInput} into a real `Promise`. A factory is invoked with
 * the given signal; a synchronous `throw` inside the factory becomes a
 * rejection so callers only have to handle one failure path.
 */
export function toPromise<T>(input: PromiseInput<T>, signal: AbortSignal): Promise<T> {
  if (!isPromiseFactory(input)) {
    return Promise.resolve(input);
  }
  try {
    return Promise.resolve(input(signal));
  } catch (error) {
    return Promise.reject(error);
  }
}

/**
 * Subscribes to `input` and reports the settled {@link PromiseState} through
 * `onSettle`. The returned function cancels the subscription: it aborts the
 * signal handed to a factory and guarantees `onSettle` is never called
 * afterwards, which protects against stale results and updates after unmount.
 */
export function subscribe<T>(
  input: PromiseInput<T>,
  onSettle: (state: PromiseState<T>) => void,
): () => void {
  const controller = new AbortController();
  let active = true;

  toPromise(input, controller.signal).then(
    (value) => {
      if (active) onSettle(fulfilled(value));
    },
    (error: unknown) => {
      if (active) onSettle(rejected(error));
    },
  );

  return () => {
    active = false;
    controller.abort();
  };
}
