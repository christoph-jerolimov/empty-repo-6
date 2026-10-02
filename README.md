# usepromises

Tiny, type-safe React hooks for working with promises.

- **`usePromise(promise, deps?)`** – track a promise (or a promise factory) and re-run it when `deps` change.
- **`useMountPromise(promise)`** – run a promise once, when the component mounts.
- **`useUnmountPromise(promise)`** – run a promise when the component unmounts.

Zero dependencies, ESM + CJS, works with React 18 and 19, 100 % test coverage.

## Install

```sh
npm install usepromises
# or
pnpm add usepromises
```

## Usage

### `usePromise(promise, deps?)`

```tsx
import { usePromise } from "usepromises";

function Profile({ id }: { id: string }) {
  const user = usePromise((signal) => fetchUser(id, { signal }), [id]);

  if (user.isPending) return <Spinner />;
  if (user.isRejected) return <ErrorMessage error={user.error} />;
  return <h1>{user.value.name}</h1>;
}
```

`promise` can be:

- an existing `Promise` (or any thenable), or
- a factory `(signal: AbortSignal) => Promise<T> | T`. The signal is aborted when the hook re-runs or the component unmounts, so pass it to `fetch` & co. to cancel work early.

`deps` works like the dependency list of `useEffect`: the promise is (re)created whenever a dependency changes. When `deps` is omitted:

- a **promise instance** is re-tracked whenever a different promise is passed in (`deps = [promise]`);
- a **factory** runs once on mount (`deps = []`). Provide `deps` to re-run it when its inputs change.

Results of superseded runs are ignored, so the returned state always belongs to the latest run, and no state is updated after unmount.

### `useMountPromise(promise)`

Runs the promise exactly once when the component mounts. Later changes of the argument are ignored.

```tsx
import { useMountPromise } from "usepromises";

function App() {
  const config = useMountPromise((signal) => loadConfig({ signal }));

  if (config.status !== "fulfilled") return null;
  return <Main config={config.value} />;
}
```

### `useUnmountPromise(promise)`

Runs the promise when the component unmounts, e.g. to flush a draft or release a remote resource. The factory passed on the *last* render is used, so it always sees the latest props and state.

```tsx
import { useUnmountPromise } from "usepromises";

function Editor({ draft }: { draft: string }) {
  useUnmountPromise(() => saveDraft(draft));
  return <textarea value={draft} />;
}
```

Nothing is returned because the component is gone by the time the promise runs. Rejections are not caught, so handle errors inside the factory if they must not surface as unhandled rejections.

## State shape

`usePromise` and `useMountPromise` return a `PromiseState<T>`, a discriminated union you can narrow on `status` or on the boolean flags:

```ts
type PromiseState<T> =
  | { status: "pending";   value: undefined; error: undefined; isPending: true;  isFulfilled: false; isRejected: false }
  | { status: "fulfilled"; value: T;         error: undefined; isPending: false; isFulfilled: true;  isRejected: false }
  | { status: "rejected";  value: undefined; error: unknown;   isPending: false; isFulfilled: false; isRejected: true  };
```

```ts
switch (state.status) {
  case "pending":   // state.value is undefined
  case "fulfilled": // state.value is T
  case "rejected":  // state.error is unknown
}
```

> **React Strict Mode:** in development, React mounts, unmounts and re-mounts components once to surface bugs. Like any effect, the hooks run twice in that case; the first run is aborted via its `AbortSignal` and its result is discarded.

## Development

```sh
pnpm install
pnpm run check   # lint + typecheck + tests + build + package validation
```

| Script                | What it does                                         |
| --------------------- | ---------------------------------------------------- |
| `pnpm test`           | Run the test suite once (Vitest + Testing Library)   |
| `pnpm test:watch`     | Run tests in watch mode                              |
| `pnpm test:coverage`  | Run tests with 100 % coverage thresholds             |
| `pnpm lint`           | Lint and format check with Biome                     |
| `pnpm typecheck`      | Type-check with `tsc`                                |
| `pnpm build`          | Bundle ESM + CJS + type declarations with tsdown     |
| `pnpm check:package`  | Validate the published package (publint + attw)      |

### Releasing

Publishing is automated by the **Publish** workflow, which runs when a GitHub release is published and uses [npm trusted publishing](https://docs.npmjs.com/trusted-publishers) with provenance. Bump the version in `package.json`, create a release tagged `vX.Y.Z`, and the workflow publishes `usepromises` to npm.

## License

[MIT](./LICENSE)
