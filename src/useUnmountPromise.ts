import { useEffect, useRef } from "react";

/**
 * Runs a promise when the component unmounts.
 *
 * Because an already-created promise is already running, this hook takes a
 * factory function so the promise is only created at unmount time. The latest
 * factory passed to the hook is the one that runs, so it may safely close over
 * props or state without stale values.
 *
 * The component is gone by the time the promise runs, so nothing is returned.
 * A rejected promise is not handled by this hook; catch errors inside the
 * factory if they must not surface as unhandled rejections.
 *
 * @example
 * useUnmountPromise(() => saveDraft(draft));
 */
export function useUnmountPromise<T>(promise: () => Promise<T>): void {
  const promiseRef = useRef(promise);
  promiseRef.current = promise;

  useEffect(
    () => () => {
      void promiseRef.current();
    },
    [],
  );
}
