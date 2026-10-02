import { useEffect, useRef } from "react";

import { toPromise } from "./internal.js";
import type { PromiseInput } from "./types.js";

/**
 * Runs a promise when the component unmounts, e.g. to flush a draft or release
 * a remote resource.
 *
 * `promise` can be an existing promise or a factory `() => Promise`. The value
 * passed on the *last* render is used, so a factory always sees the latest
 * props and state. Because the component is gone by the time the promise runs,
 * nothing is returned and rejections are not caught: handle errors inside the
 * factory if they must not surface as unhandled rejections.
 *
 * @example
 * ```tsx
 * useUnmountPromise(() => saveDraft(draft));
 * ```
 */
export function useUnmountPromise<T>(promise: PromiseInput<T>): void {
  const latestPromise = useRef(promise);

  // Track the latest input in an effect (not during render) so a value from a
  // discarded concurrent render can never leak into the unmount callback.
  useEffect(() => {
    latestPromise.current = promise;
  });

  useEffect(
    () => () => {
      void toPromise(latestPromise.current, new AbortController().signal);
    },
    [],
  );
}
