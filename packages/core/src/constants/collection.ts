/**
 * Icon collection kinds
 * Defines the types of icon collections used in the application
 */
export const IconCollectionKind = {
  /** The icon is a favorite */
  FAVORITE: 'favorite',
  /** The icon is a recent */
  RECENT: 'recent',
} as const

/**
 * Type representing possible icon collection kind values
 */
export type IconCollectionKind = (typeof IconCollectionKind)[keyof typeof IconCollectionKind]
