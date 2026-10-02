import './dom.ts';
import { act, createElement, type ComponentType } from 'react';
import { createRoot, type Root } from 'react-dom/client';

export interface RenderHookResult<Result, Props> {
  /** The value the hook returned on the most recent render. */
  current: () => Result;
  /** Number of times the component rendered. */
  renderCount: () => number;
  rerender: (props: Props) => Promise<void>;
  unmount: () => Promise<void>;
}

/**
 * Minimal `renderHook` built on `react-dom/client`: renders a component that
 * calls `hook` and exposes its latest return value.
 */
export async function renderHook<Result, Props = void>(
  hook: (props: Props) => Result,
  initialProps: NoInfer<Props>,
): Promise<RenderHookResult<Result, Props>> {
  let current!: Result;
  let renders = 0;

  const Component: ComponentType<{ hookProps: Props }> = ({ hookProps }) => {
    renders += 1;
    current = hook(hookProps);
    return null;
  };

  const root: Root = createRoot(document.createElement('div'));
  const render = (props: Props) =>
    act(async () => {
      root.render(createElement(Component, { hookProps: props }));
    });

  await render(initialProps);

  return {
    current: () => current,
    renderCount: () => renders,
    rerender: render,
    unmount: () => act(async () => root.unmount()),
  };
}

/** Waits until all currently queued promise callbacks have run. */
export function flushPromises(): Promise<void> {
  return act(async () => {
    await new Promise<void>((resolve) => setTimeout(resolve, 0));
  });
}

/** A promise whose settlement is controlled by the test. */
export function deferred<T>() {
  let resolve!: (value: T) => void;
  let reject!: (error: unknown) => void;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}
