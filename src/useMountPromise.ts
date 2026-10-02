import { useEffect, useRef, useState } from "react";

import { PENDING, subscribe } from "./internal.js";
import type { PromiseInput, PromiseState } from "./types.js";

/**
 * Runs a promise exactly once, when the component mounts, and tracks its state.
 *
 * `promise` can be an existing promise or a factory `(signal) => Promise`. Only
 * the value passed on the first render is used; later changes are ignored. If
 * the component unmounts before the promise settles, the factory's
 * `AbortSignal` is aborted and no state update happens.
 *
 * @example
 * ```tsx
 * const config = useMountPromise((signal) => loadConfig({ signal }));
 * ```
 */
export function useMountPromise<T>(promise: PromiseInput<T>): PromiseState<T> {
  const [state, setState] = useState<PromiseState<T>>(PENDING);
  const initialPromise = useRef(promise);

  useEffect(() => subscribe(initialPromise.current, setState), []);

  return state;
}
