/**
 * SVG component declaration types
 * Defines how an SVG component is declared in the code
 */
export const SVGDeclaration = {
  /** Function declaration (e.g., function Component() {}) */
  Function: 'function',
  /** Variable declaration (e.g., const Component = () => {}) */
  Variable: 'variable',
} as const

/**
 * Type representing possible SVG declaration values
 */
export type SVGDeclaration = (typeof SVGDeclaration)[keyof typeof SVGDeclaration]
