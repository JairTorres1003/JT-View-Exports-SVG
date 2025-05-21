/**
 * Creates a type based on `T` where all properties are optional except for the properties specified in `K`.
 *
 * @template T - The base type.
 * @template K - The keys of `T` that should remain required.
 */
export type PartialExcept<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>

/**
 * Creates a type based on `T` where all properties are required except for the properties specified in `K`.
 *
 * @template T - The base type.
 * @template K - The keys of `T` that should remain optional.
 */
export type RequiredExcept<T, K extends keyof T> = Required<Pick<T, K>> & Omit<T, K>
