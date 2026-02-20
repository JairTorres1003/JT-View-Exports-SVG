import type { SVGFile } from '../common'

/**
 * Generic message structure
 * @template T - Message type identifier (string literal)
 * @template D - Data payload type (undefined if no data)
 */
type Message<T extends string, D = undefined> = [D] extends [undefined]
  ? { type: T }
  : { type: T; data: D }

/**
 * Map of message types to their data payloads
 */
export type MessageMap = Record<string, unknown>

/**
 * Converts a MessageMap to a union of Message types
 * @template M - The message map
 */
export type MessagesUnion<M extends MessageMap> = {
  [K in keyof M]: Message<K & string, M[K]>
}[keyof M]

/**
 * Map of message types to their handler functions
 * @template M - The message map
 */
export type HandlersMap<M extends MessageMap> = {
  [K in keyof M]: [M[K]] extends [undefined] ? () => void : (data: M[K]) => void
}

/**
 * Utility type to convert a union of types to an intersection
 * @template U - The union type
 */
type UnionToIntersection<U> = (U extends unknown ? (arg: U) => void : never) extends (
  arg: infer I
) => void
  ? I
  : never

/**
 * Represents a message emitter that can emit typed messages based on a message map.
 * @template M - A message map type where keys are message types and values are optional message data types.
 */
export type MessageEmitter<M extends MessageMap> = UnionToIntersection<
  {
    [K in keyof M]: [M[K]] extends [undefined] ? (type: K) => void : (type: K, data: M[K]) => void
  }[keyof M]
>

/**
 * Represents a subscriber function that can subscribe to typed messages based on a message map.
 * @template M - A message map type where keys are message types and values are optional message data types.
 */
export type MessageSubscriber<M extends MessageMap> = UnionToIntersection<
  {
    [K in keyof M]: [M[K]] extends [undefined]
      ? (type: K) => void
      : (type: K, handler: (data: M[K]) => void) => void
  }[keyof M]
>

/**
 * Utility type to extract the argument type for a given handler function from a handlers map.
 * @template T - The handlers map type where keys are message types and values are handler function types.
 */
// biome-ignore lint/suspicious/noExplicitAny: This utility type is necessary for extracting argument types from handler functions, which may have varying signatures.
export type HandlerArgs<T extends Record<string, (...args: any) => any>> = Parameters<T[keyof T]>[0]

/**
 * Assets path structure
 */
export interface AssetPath {
  /** Workspace assets */
  workspace: SVGFile[]
  /** User-specific assets */
  user: SVGFile[]
}

/**
 * Manifest content for webview
 */
export interface ManifestContent {
  /** Favicon path */
  favicon: string
  /** Main script path */
  main: string
  /** Stylesheet path */
  style: string
}
