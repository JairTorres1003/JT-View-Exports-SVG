/**
 * Removes any leading relative (`./`) or absolute (`/`) path prefixes from a path string.
 *
 * This is useful for normalizing paths so they can be treated as project-relative
 * regardless of whether they were originally written as `./foo/bar` or `/foo/bar`.
 *
 * @param path - The input path to sanitize.
 * @returns The path without leading `./` or `/` segments.
 */
export function sanitizePathStart(path: string): string {
  return path.replace(/^(\.\/|\/)+/, '')
}
