import { Window } from 'happy-dom'

const window = new Window()

Object.assign(globalThis, {
  window,
  document: window.document,
  HTMLElement: window.HTMLElement,
  customElements: window.customElements,
  CSSStyleSheet: window.CSSStyleSheet,
  UIEvent: window.UIEvent,
  MouseEvent: window.MouseEvent,
  CSS: window.CSS,
})
