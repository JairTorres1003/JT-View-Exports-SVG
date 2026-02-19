/**
 * Makes all properties of T nullable
 * @example
 * type User = { name: string; age: number }
 * type NullableUser = Nullable<User>
 * // Result: { name: string; age: number } | null
 */
export type Nullable<T> = T | null

/**
 * Makes all properties of T optional and nullable
 * @example
 * type User = { name: string; age: number }
 * type MaybeUser = Maybe<User>
 * // Result: { name?: string | null; age?: number | null }
 */
export type Maybe<T> = {
  [K in keyof T]?: T[K] | null
}

/**
 * Extracts the data type from a message
 * @example
 * type Msg = { type: 'test'; data: string }
 * type Data = ExtractMessageData<Msg>
 * // Result: string
 */
export type ExtractMessageData<T> = T extends { data: infer D } ? D : never

/**
 * Result type for operations that can fail
 * @example
 * function getUser(): Result<User, Error> {
 *   try {
 *     return { success: true, data: user }
 *   } catch (error) {
 *     return { success: false, error }
 *   }
 * }
 */
export type Result<T, E = Error> = { success: true; data: T } | { success: false; error: E }

/**
 * Deep readonly utility - makes all nested properties readonly
 * @example
 * type Config = { settings: { theme: string } }
 * type ReadonlyConfig = DeepReadonly<Config>
 * // All nested properties are readonly
 */
export type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K]
}

/**
 * Pick properties that are of a specific type
 * @example
 * type User = { name: string; age: number; isActive: boolean }
 * type StringProps = PickByType<User, string>
 * // Result: { name: string }
 */
export type PickByType<T, U> = {
  [K in keyof T as T[K] extends U ? K : never]: T[K]
}

/**
 * Make specific keys required
 * @example
 * type User = { name?: string; age?: number }
 * type UserWithName = RequireKeys<User, 'name'>
 * // Result: { name: string; age?: number }
 */
export type RequireKeys<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>

/**
 * Make specific keys optional
 * @example
 * type User = { name: string; age: number }
 * type UserWithOptionalAge = OptionalKeys<User, 'age'>
 * // Result: { name: string; age?: number }
 */
export type OptionalKeys<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

/**
 * Extract keys from object that match a specific value type
 */
export type KeysOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never
}[keyof T]

/**
 * Make all properties mutable (remove readonly)
 */
export type Mutable<T> = {
  -readonly [K in keyof T]: T[K]
}

/**
 * Exclude null and undefined from T
 */
export type NonNullable<T> = Exclude<T, null | undefined>
