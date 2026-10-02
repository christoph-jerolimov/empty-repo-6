import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { useMountPromise } from './index.ts';
import { deferred, flushPromises, renderHook } from './test/renderHook.ts';

describe('useMountPromise', () => {
  it('awaits the promise and exposes its value', async () => {
    const { promise, resolve } = deferred<number>();
    const { current } = await renderHook(() => useMountPromise(promise), undefined);

    assert.equal(current().status, 'pending');

    resolve(42);
    await flushPromises();

    assert.deepEqual(current(), { status: 'fulfilled', value: 42, error: undefined });
  });

  it('exposes a rejection', async () => {
    const { promise, reject } = deferred<number>();
    const { current } = await renderHook(() => useMountPromise(promise), undefined);

    reject('nope');
    await flushPromises();

    assert.deepEqual(current(), { status: 'rejected', value: undefined, error: 'nope' });
  });

  it('calls a function only on mount, even when a new one is passed later', async () => {
    const calls: string[] = [];
    const { current, rerender } = await renderHook((name: string) => {
      return useMountPromise(() => {
        calls.push(name);
        return Promise.resolve(name);
      });
    }, 'first');
    await flushPromises();

    await rerender('second');
    await flushPromises();
    await rerender('third');
    await flushPromises();

    assert.deepEqual(calls, ['first']);
    assert.equal(current().value, 'first');
  });

  it('ignores a new promise object passed on a later render', async () => {
    const first = deferred<string>();
    const second = deferred<string>();
    const { current, rerender } = await renderHook(
      (p: Promise<string>) => useMountPromise(p),
      first.promise,
    );

    await rerender(second.promise);
    second.resolve('second');
    await flushPromises();
    assert.equal(current().status, 'pending', 'the second promise is never awaited');

    first.resolve('first');
    await flushPromises();
    assert.equal(current().value, 'first');
  });

  it('does not update state after unmount', async () => {
    const { promise, resolve } = deferred<string>();
    const { current, renderCount, unmount } = await renderHook(
      () => useMountPromise(promise),
      undefined,
    );
    const renders = renderCount();

    await unmount();
    resolve('late');
    await flushPromises();

    assert.equal(current().status, 'pending');
    assert.equal(renderCount(), renders);
  });
});
