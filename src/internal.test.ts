import {
  fulfilled,
  isPromiseFactory,
  PENDING,
  rejected,
  subscribe,
  toPromise,
} from "./internal.js";
import { deferred, flushMicrotasks } from "./test/deferred.js";

describe("state constructors", () => {
  it("PENDING is a frozen pending state", () => {
    expect(PENDING).toEqual({
      status: "pending",
      value: undefined,
      error: undefined,
      isPending: true,
      isFulfilled: false,
      isRejected: false,
    });
    expect(Object.isFrozen(PENDING)).toBe(true);
  });

  it("fulfilled() carries the value", () => {
    expect(fulfilled(42)).toEqual({
      status: "fulfilled",
      value: 42,
      error: undefined,
      isPending: false,
      isFulfilled: true,
      isRejected: false,
    });
  });

  it("rejected() carries the error", () => {
    const error = new Error("boom");
    expect(rejected(error)).toEqual({
      status: "rejected",
      value: undefined,
      error,
      isPending: false,
      isFulfilled: false,
      isRejected: true,
    });
  });
});

describe("isPromiseFactory", () => {
  it("distinguishes factories from promises and thenables", () => {
    expect(isPromiseFactory(() => Promise.resolve(1))).toBe(true);
    expect(isPromiseFactory(Promise.resolve(1))).toBe(false);
    expect(isPromiseFactory({ then: () => undefined } as unknown as PromiseLike<number>)).toBe(
      false,
    );
  });
});

describe("toPromise", () => {
  const signal = new AbortController().signal;

  it("passes promises through", async () => {
    await expect(toPromise(Promise.resolve("a"), signal)).resolves.toBe("a");
  });

  it("wraps thenables in a real promise", async () => {
    const thenable: PromiseLike<string> = {
      then: (onFulfilled) => Promise.resolve("b").then(onFulfilled),
    };
    const result = toPromise(thenable, signal);
    expect(result).toBeInstanceOf(Promise);
    await expect(result).resolves.toBe("b");
  });

  it("invokes a factory with the signal and resolves its result", async () => {
    const factory = vi.fn((_signal: AbortSignal) => Promise.resolve("c"));
    await expect(toPromise(factory, signal)).resolves.toBe("c");
    expect(factory).toHaveBeenCalledExactlyOnceWith(signal);
  });

  it("accepts factories returning plain values", async () => {
    await expect(toPromise(() => "sync", signal)).resolves.toBe("sync");
  });

  it("turns a synchronous throw into a rejection", async () => {
    const error = new Error("sync failure");
    await expect(
      toPromise(() => {
        throw error;
      }, signal),
    ).rejects.toBe(error);
  });
});

describe("subscribe", () => {
  it("reports fulfilment", async () => {
    const onSettle = vi.fn();
    subscribe(Promise.resolve(1), onSettle);
    await flushMicrotasks();
    expect(onSettle).toHaveBeenCalledExactlyOnceWith(fulfilled(1));
  });

  it("reports rejection", async () => {
    const onSettle = vi.fn();
    subscribe(Promise.reject(new Error("no")), onSettle);
    await flushMicrotasks();
    expect(onSettle).toHaveBeenCalledExactlyOnceWith(rejected(new Error("no")));
  });

  it("never calls back after being cancelled", async () => {
    const { promise, resolve } = deferred<number>();
    const onSettle = vi.fn();
    const cancel = subscribe(promise, onSettle);
    cancel();
    resolve(1);
    await flushMicrotasks();
    expect(onSettle).not.toHaveBeenCalled();
  });

  it("never calls back with a rejection after being cancelled", async () => {
    const { promise, reject } = deferred<number>();
    const onSettle = vi.fn();
    const cancel = subscribe(promise, onSettle);
    cancel();
    reject(new Error("too late"));
    await flushMicrotasks();
    expect(onSettle).not.toHaveBeenCalled();
  });

  it("aborts the factory signal when cancelled", () => {
    let seen: AbortSignal | undefined;
    const cancel = subscribe((signal) => {
      seen = signal;
      return new Promise<never>(() => undefined);
    }, vi.fn());
    expect(seen?.aborted).toBe(false);
    cancel();
    expect(seen?.aborted).toBe(true);
  });
});
