/**
 * Icon cache kinds
 * Defines the types of icon caches used in the application
 */
export const CacheIconKind = {
  /** The icon is a favorite */
  FAVORITE: 'favorite',
  /** The icon is a recent */
  RECENT: 'recent',
} as const

/**
 * Type representing possible cache icon kind values
 */
export type CacheIconKind = (typeof CacheIconKind)[keyof typeof CacheIconKind]
