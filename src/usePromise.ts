import { type DependencyList, useEffect, useState } from "react";

import { isPromiseFactory, PENDING, subscribe } from "./internal.js";
import type { PromiseInput, PromiseState } from "./types.js";

/**
 * Tracks the state of a promise and re-renders the component when it settles.
 *
 * `promise` can be an existing promise or a factory `(signal) => Promise`. The
 * factory receives an `AbortSignal` that is aborted when the hook re-runs or
 * the component unmounts. Results of superseded runs are ignored, so the
 * returned state always belongs to the latest run.
 *
 * `deps` controls when the promise is (re)created, exactly like the dependency
 * list of `useEffect`. When omitted:
 * - for a promise instance, the hook re-runs whenever a different promise is
 *   passed in (`deps = [promise]`);
 * - for a factory, the hook runs once on mount (`deps = []`). Pass `deps` to
 *   re-run the factory when its inputs change.
 *
 * @example
 * ```tsx
 * const user = usePromise((signal) => fetchUser(id, { signal }), [id]);
 * if (user.isPending) return <Spinner />;
 * if (user.isRejected) return <Error error={user.error} />;
 * return <Profile user={user.value} />;
 * ```
 */
export function usePromise<T>(promise: PromiseInput<T>, deps?: DependencyList): PromiseState<T> {
  const [state, setState] = useState<PromiseState<T>>(PENDING);

  const effectiveDeps: DependencyList = deps ?? (isPromiseFactory(promise) ? [] : [promise]);

  useEffect(
    () => {
      setState(PENDING);
      return subscribe(promise, setState);
    },
    // biome-ignore lint/correctness/useExhaustiveDependencies: `promise` is intentionally read through the caller-supplied `deps`, mirroring `useEffect`/`useMemo` semantics.
    effectiveDeps,
  );

  return state;
}
