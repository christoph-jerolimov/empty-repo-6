import { useEffect, useState, type DependencyList } from "react";
import { PENDING, resolvePromise, type PromiseOrFactory, type PromiseState } from "./types.ts";

/**
 * Runs a promise and tracks its state across renders.
 *
 * The promise is started when the component mounts and again whenever one of
 * the `deps` changes, following the same rules as `useEffect`. When `deps` is
 * omitted the promise is started once on mount.
 *
 * Results from a promise that has become stale (because `deps` changed or the
 * component unmounted before it settled) are ignored, so the returned state
 * always reflects the most recent run.
 *
 * @example
 * const { loading, value, error } = usePromise(() => fetchUser(id), [id]);
 */
export function usePromise<T>(
  promise: PromiseOrFactory<T>,
  deps: DependencyList = [],
): PromiseState<T> {
  const [state, setState] = useState<PromiseState<T>>(PENDING);

  useEffect(() => {
    let cancelled = false;

    setState((previous) => (previous.status === "pending" ? previous : PENDING));

    resolvePromise(promise).then(
      (value) => {
        if (!cancelled) {
          setState({ status: "fulfilled", loading: false, value, error: undefined });
        }
      },
      (error: unknown) => {
        if (!cancelled) {
          setState({ status: "rejected", loading: false, value: undefined, error });
        }
      },
    );

    return () => {
      cancelled = true;
    };
    // The promise (or factory) is intentionally not a dependency: callers
    // control when it re-runs through `deps`, exactly like `useEffect`.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return state;
}
