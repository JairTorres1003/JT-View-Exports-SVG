import type { SVGFile } from '../common'

/**
 * Generic message structure
 * @template T - Message type identifier (string literal)
 * @template D - Data payload type (void if no data)
 */
type Message<T extends string, D = void> = D extends void ? { type: T } : { type: T; data: D }

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
  [K in keyof M]: M[K] extends void ? () => void : (data: M[K]) => void
}

/**
 * Utility type to convert a union of types to an intersection
 * @template U - The union type
 */
type UnionToIntersection<U> = (U extends unknown ? (x: U) => void : never) extends (
  x: infer I
) => void
  ? I
  : never

/**
 * Utility type to create a function type for posting messages
 * @template M - The message map
 */
export type MessageFnMap<M extends MessageMap> = UnionToIntersection<
  {
    [K in keyof M]: M[K] extends void ? (type: K) => void : (type: K, data: M[K]) => void
  }[keyof M]
>

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
