import { useEffect, useRef } from 'react';
import { toPromise, type PromiseSource } from './types.ts';

/**
 * Starts a promise when the component unmounts, for example to persist a
 * draft or release a remote resource.
 *
 * Pass a function that returns a promise: it is called once, on unmount. The
 * value passed on the final render is used, so the function always sees the
 * latest props and state. Nothing is returned because the component no longer
 * exists when the promise settles.
 *
 * Rejections are not swallowed: handle errors inside the function you pass.
 * Note that React Strict Mode simulates an unmount in development, which runs
 * this hook as well.
 */
export function useUnmountPromise<T>(promise: PromiseSource<T>): void {
  const latest = useRef(promise);
  latest.current = promise;

  useEffect(
    () => () => {
      void toPromise(latest.current);
    },
    [],
  );
}
