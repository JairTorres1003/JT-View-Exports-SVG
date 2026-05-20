/**
 * Finds and returns the names of CSS classes that contain animation-related properties.
 *
 * This function scans the provided CSS string and extracts the class names
 * of any selectors that define either the `animation` or `animation-name` properties.
 *
 * @param css - The CSS code as a string to search for animation classes.
 * @returns An array of class names (without the leading dot) that use animation properties.
 */
export function findAnimateClassesStyles(css: string): string[] {
  const animateClasses: string[] = []
  const regex = /\.([a-zA-Z0-9_-]+)\s*{([^}]*\b(?:animation|animation-name)\s*:)/g

  while (true) {
    const match = regex.exec(css)

    if (!match) break

    animateClasses.push(match[1])
  }

  return animateClasses
}
