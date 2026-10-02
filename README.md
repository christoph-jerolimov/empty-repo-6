# usepromises

Tiny React hooks for working with promises. No dependencies besides React.

```sh
npm install usepromises
```

## Hooks

All hooks accept either a promise or a function that returns one. Prefer the
function form: it lets the hook create the promise inside an effect instead of
on every render.

`usePromise` and `useMountPromise` return a `PromiseState<T>`:

```ts
type PromiseState<T> =
  | { status: 'pending'; value: undefined; error: undefined }
  | { status: 'fulfilled'; value: T; error: undefined }
  | { status: 'rejected'; value: undefined; error: unknown };
```

### `usePromise(promise, deps?)`

Awaits a promise and tracks its state. When `deps` change, the state resets to
`pending` and the promise is awaited again. Results from a promise that was
replaced before it settled are ignored, and nothing updates after unmount.

```tsx
import { usePromise } from 'usepromises';

function User({ id }: { id: string }) {
  const user = usePromise(() => fetchUser(id), [id]);

  if (user.status === 'pending') return <p>Loading…</p>;
  if (user.status === 'rejected') return <p>Failed: {String(user.error)}</p>;
  return <p>{user.value.name}</p>;
}
```

When `deps` is omitted:

- a function runs once, on mount (`deps` defaults to `[]`);
- a promise object is awaited whenever a different promise is passed (`deps`
  defaults to `[promise]`).

### `useMountPromise(promise)`

Awaits the promise once, when the component mounts. Later renders never re-run
it, even if a different promise is passed. Same as `usePromise(promise, [])`.

```tsx
import { useMountPromise } from 'usepromises';

function Settings() {
  const settings = useMountPromise(loadSettings);
  // ...
}
```

### `useUnmountPromise(promise)`

Starts a promise when the component unmounts, for example to save a draft or
release a remote resource. The function passed on the final render is called,
so it always sees the latest props and state. It returns nothing because the
component is gone before the promise settles.

```tsx
import { useUnmountPromise } from 'usepromises';

function Editor({ draft }: { draft: string }) {
  useUnmountPromise(() => saveDraft(draft).catch(reportError));
  // ...
}
```

Rejections are not swallowed, so handle errors inside the function. React
Strict Mode simulates an unmount in development, which runs this hook too.

## Development

Tests use Node's built-in test runner and run the TypeScript sources directly,
so Node 22.18 or newer is required.

```sh
npm install
npm test        # type-check and run tests
npm run build   # emit dist/
```
