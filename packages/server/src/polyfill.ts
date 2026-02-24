// biome-ignore-all lint/suspicious/noExplicitAny: This file is a polyfill for the `window` object in a Node.js environment, which is necessary for testing purposes. Using `any` is acceptable in this context to allow for flexibility in the properties being added to the global object.
// biome-ignore-all lint/suspicious/noGlobalAssign: assign the `auxGlobalThis` object to the `globalThis` object
import { Window } from 'happy-dom'

const window = new Window()
const auxGlobalThis = globalThis as any

auxGlobalThis.window = window
auxGlobalThis.document = window.document
auxGlobalThis.navigator = window.navigator
auxGlobalThis.MouseEvent = window.MouseEvent
auxGlobalThis.UIEvent = window.UIEvent
auxGlobalThis.HTMLElement = window.HTMLElement

// assign the `auxGlobalThis` object to the `globalThis` object
;(globalThis as any) = auxGlobalThis
