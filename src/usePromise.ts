import { useEffect, useState, type DependencyList } from 'react';
import { PENDING, toPromise, type PromiseSource, type PromiseState } from './types.ts';

/**
 * Tracks the settlement state of a promise.
 *
 * The promise is awaited inside an effect. Whenever `deps` change the state
 * goes back to `pending` and the new promise is awaited; results from an
 * earlier promise that settles late are ignored, so the returned state always
 * belongs to the latest promise. Nothing is updated after unmount.
 *
 * `promise` may be a promise or a function that returns one. When `deps` is
 * omitted it defaults to `[promise]` for a promise object, so a new promise is
 * picked up as soon as it is passed, and to `[]` for a function, so the
 * function runs once on mount. Pass `deps` explicitly to re-run a function
 * when its inputs change, exactly as with `useEffect`.
 */
export function usePromise<T>(
  promise: PromiseSource<T>,
  deps?: DependencyList,
): PromiseState<T> {
  const [state, setState] = useState<PromiseState<T>>(PENDING);
  const effectiveDeps = deps ?? (typeof promise === 'function' ? [] : [promise]);

  useEffect(() => {
    let active = true;
    setState((previous) => (previous.status === 'pending' ? previous : PENDING));

    toPromise(promise).then(
      (value) => {
        if (active) setState({ status: 'fulfilled', value, error: undefined });
      },
      (error: unknown) => {
        if (active) setState({ status: 'rejected', value: undefined, error });
      },
    );

    return () => {
      active = false;
    };
    // The caller controls when the promise is re-awaited through `deps`.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, effectiveDeps);

  return state;
}
