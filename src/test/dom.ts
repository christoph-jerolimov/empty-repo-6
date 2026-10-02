// Gives React DOM a document to render into. Imported by every test file.
import { JSDOM } from 'jsdom';

declare global {
  // Tells React that updates are wrapped in `act()`.
  // eslint-disable-next-line no-var
  var IS_REACT_ACT_ENVIRONMENT: boolean;
}

const dom = new JSDOM('<!doctype html><html><body></body></html>');

globalThis.window = dom.window as unknown as Window & typeof globalThis;
globalThis.document = dom.window.document;
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
