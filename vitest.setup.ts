import { cleanup } from "@testing-library/react";

// React Testing Library only auto-cleans when `afterEach` is a global; with
// `globals: true` this is already the case, but being explicit costs nothing.
afterEach(() => {
  cleanup();
});
