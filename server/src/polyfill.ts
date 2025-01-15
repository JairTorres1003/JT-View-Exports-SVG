// deno-lint-ignore-file no-explicit-any
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
