# usepromises

[![CI](https://github.com/christoph-jerolimov/empty-repo-6/actions/workflows/ci.yml/badge.svg)](https://github.com/christoph-jerolimov/empty-repo-6/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/usepromises)](https://www.npmjs.com/package/usepromises)

Small, dependency-free React hooks for working with promises.

- `usePromise(promise, deps?)` – run a promise and re-run it when `deps` change
- `useMountPromise(promise)` – run a promise once when the component mounts
- `useUnmountPromise(promise)` – run a promise when the component unmounts

Written in TypeScript, built and tested with [Vite+](https://viteplus.dev).
Works with React 18 and 19.

## Installation

```bash
npm install usepromises
# or
pnpm add usepromises
```

## Usage

### `usePromise(promise, deps?)`

Starts the promise on mount and again whenever one of the `deps` changes, with
the same semantics as `useEffect`. If `deps` is omitted the promise runs once.

```tsx
import { usePromise } from "usepromises";

function User({ id }: { id: string }) {
  const { loading, value, error } = usePromise(() => fetchUser(id), [id]);

  if (loading) return <p>Loading…</p>;
  if (error) return <p>Something went wrong</p>;
  return <p>{value.name}</p>;
}
```

The returned state is a discriminated union, so narrowing on `status` (or on
`loading` / `error`) gives you a correctly typed `value`:

```ts
type PromiseState<T> =
  | { status: "pending"; loading: true; value: undefined; error: undefined }
  | { status: "fulfilled"; loading: false; value: T; error: undefined }
  | { status: "rejected"; loading: false; value: undefined; error: unknown };
```

Results from a run that became stale, because `deps` changed or the component
unmounted before the promise settled, are ignored. The state always reflects
the most recent run, and no state updates happen after unmount.

`promise` can be either a factory function (`() => Promise<T>`) or a promise
instance. A factory is preferred: it means the promise is only created when the
hook actually runs it. When you pass a promise instance together with `deps`,
make sure the instance is recreated when `deps` change.

### `useMountPromise(promise)`

Runs the promise exactly once, when the component mounts. Equivalent to
`usePromise(promise, [])`.

```tsx
import { useMountPromise } from "usepromises";

function Settings() {
  const settings = useMountPromise(() => loadSettings());

  return settings.status === "fulfilled" ? <Form initial={settings.value} /> : null;
}
```

### `useUnmountPromise(promise)`

Runs the promise when the component unmounts. Since a promise instance is
already running the moment it is created, this hook takes a factory function
and calls it at unmount time. The latest factory passed to the hook is used, so
it can safely close over current props and state.

```tsx
import { useUnmountPromise } from "usepromises";

function Editor({ draft }: { draft: string }) {
  useUnmountPromise(() => saveDraft(draft));

  return <textarea defaultValue={draft} />;
}
```

Nothing is returned because the component is gone by the time the promise runs.
Rejections are not handled by the hook, so catch errors inside the factory if
they must not surface as unhandled rejections.

Note: in React Strict Mode (development only) effects are mounted, unmounted
and mounted again, so the unmount promise fires once extra during development.

## Development

```bash
vp install   # install dependencies
vp test      # run the unit tests
vp check     # format, lint and type check
vp pack      # build the library into dist/
```

The project uses [Vite+](https://viteplus.dev). If you do not have `vp`
installed globally, use `pnpm install`, `pnpm test`, `pnpm check` and
`pnpm build` instead.

## License

MIT
