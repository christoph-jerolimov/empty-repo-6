import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { usePromise } from './index.ts';
import { deferred, flushPromises, renderHook } from './test/renderHook.ts';

describe('usePromise', () => {
  it('starts pending and becomes fulfilled with the resolved value', async () => {
    const { promise, resolve } = deferred<string>();
    const { current } = await renderHook(() => usePromise(promise), undefined);

    assert.deepEqual(current(), { status: 'pending', value: undefined, error: undefined });

    resolve('hello');
    await flushPromises();

    assert.deepEqual(current(), { status: 'fulfilled', value: 'hello', error: undefined });
  });

  it('becomes rejected with the error', async () => {
    const { promise, reject } = deferred<string>();
    const error = new Error('boom');
    const { current } = await renderHook(() => usePromise(promise), undefined);

    reject(error);
    await flushPromises();

    assert.equal(current().status, 'rejected');
    assert.equal(current().error, error);
    assert.equal(current().value, undefined);
  });

  it('accepts a function and calls it once per effect run', async () => {
    let calls = 0;
    const factory = () => {
      calls += 1;
      return Promise.resolve(calls);
    };
    const { current, rerender } = await renderHook(() => usePromise(factory), undefined);
    await flushPromises();

    assert.equal(calls, 1);
    assert.equal(current().value, 1);

    await rerender(undefined);
    await flushPromises();

    assert.equal(calls, 1, 'a function is not re-run on re-render without deps');
    assert.equal(current().value, 1);
  });

  it('re-runs a function when deps change and resets to pending', async () => {
    const seen: number[] = [];
    const requests = new Map<number, ReturnType<typeof deferred<string>>>();
    const { current, rerender } = await renderHook(
      (id: number) =>
        usePromise(() => {
          seen.push(id);
          const request = deferred<string>();
          requests.set(id, request);
          return request.promise;
        }, [id]),
      1,
    );
    requests.get(1)?.resolve('user-1');
    await flushPromises();
    assert.equal(current().value, 'user-1');

    await rerender(2);
    assert.equal(current().status, 'pending', 'resets while the new promise is in flight');

    requests.get(2)?.resolve('user-2');
    await flushPromises();
    assert.deepEqual(seen, [1, 2]);
    assert.equal(current().value, 'user-2');

    await rerender(2);
    await flushPromises();
    assert.deepEqual(seen, [1, 2], 'unchanged deps do not re-run the function');
  });

  it('tracks a new promise object when deps are omitted', async () => {
    const first = deferred<string>();
    const second = deferred<string>();
    const { current, rerender } = await renderHook(
      (p: Promise<string>) => usePromise(p),
      first.promise,
    );

    first.resolve('first');
    await flushPromises();
    assert.equal(current().value, 'first');

    await rerender(second.promise);
    assert.equal(current().status, 'pending');

    second.resolve('second');
    await flushPromises();
    assert.equal(current().value, 'second');
  });

  it('ignores a stale promise that settles after a newer one was started', async () => {
    const slow = deferred<string>();
    const fast = deferred<string>();
    const { current, rerender } = await renderHook(
      (p: Promise<string>) => usePromise(p, [p]),
      slow.promise,
    );

    await rerender(fast.promise);
    fast.resolve('fast');
    await flushPromises();
    assert.equal(current().value, 'fast');

    slow.resolve('slow');
    await flushPromises();
    assert.equal(current().value, 'fast', 'the stale result is dropped');
  });

  it('does not update state after unmount', async () => {
    const { promise, resolve } = deferred<string>();
    const { current, renderCount, unmount } = await renderHook(() => usePromise(promise), undefined);
    const rendersBeforeUnmount = renderCount();

    await unmount();
    resolve('too late');
    await flushPromises();

    assert.equal(current().status, 'pending');
    assert.equal(renderCount(), rendersBeforeUnmount);
  });

  it('does not re-render while already pending when deps change', async () => {
    const { current, renderCount, rerender } = await renderHook(
      (id: number) => usePromise(() => new Promise<never>(() => {}), [id]),
      1,
    );
    await flushPromises();
    assert.equal(renderCount(), 1);

    await rerender(2);
    await flushPromises();

    assert.equal(current().status, 'pending');
    assert.equal(renderCount(), 2, 'only the re-render itself, no extra pending update');
  });
});
