import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { useUnmountPromise } from './index.ts';
import { flushPromises, renderHook } from './test/renderHook.ts';

describe('useUnmountPromise', () => {
  it('does not call the function while mounted', async () => {
    let calls = 0;
    const { rerender } = await renderHook(() => {
      useUnmountPromise(() => {
        calls += 1;
        return Promise.resolve();
      });
    }, undefined);

    await rerender(undefined);
    await flushPromises();

    assert.equal(calls, 0);
  });

  it('calls the function exactly once on unmount', async () => {
    let calls = 0;
    const { unmount } = await renderHook(() => {
      useUnmountPromise(() => {
        calls += 1;
        return Promise.resolve();
      });
    }, undefined);

    await unmount();
    await flushPromises();

    assert.equal(calls, 1);
  });

  it('uses the function from the latest render', async () => {
    const seen: string[] = [];
    const { rerender, unmount } = await renderHook((name: string) => {
      useUnmountPromise(async () => {
        seen.push(name);
      });
    }, 'first');

    await rerender('second');
    await rerender('third');
    await unmount();
    await flushPromises();

    assert.deepEqual(seen, ['third']);
  });

  it('returns nothing', async () => {
    const { current } = await renderHook(
      () => useUnmountPromise(() => Promise.resolve('ignored')),
      undefined,
    );

    assert.equal(current(), undefined);
  });

  it('accepts a promise object without throwing', async () => {
    const promise = Promise.resolve('done');
    const { unmount } = await renderHook(() => useUnmountPromise(promise), undefined);

    await unmount();
    await flushPromises();
    assert.equal(await promise, 'done');
  });
});
