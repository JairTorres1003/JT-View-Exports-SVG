import fs from 'fs-extra'
import path from 'path'

type ChangelogEntry = {
  version: string
  date: string
  content: string
  startLine: number
}

/**
 * Converts a date string to ISO 8601 date format (YYYY-MM-DD).
 * @param raw - The date string to parse and format
 * @returns The formatted date string in ISO 8601 date format (YYYY-MM-DD)
 */
function parseDate(raw: string): string {
  return new Date(raw).toISOString().split('T')[0]
}

/**
 * Parses the content of a changelog file and extracts changelog entries.
 *
 * The function expects the changelog content to be divided into sections starting with "## vX.Y.Z".
 * Each section should contain a version line, a date line (enclosed in underscores), and the changelog content.
 * The function skips any initial section that does not start with a version.
 *
 * @param fileContent - The raw content of the changelog file as a string.
 * @returns An array of `ChangelogEntry` objects, each containing the version, date, content, and the starting line number.
 * @throws Will throw an error if a section does not contain a date line.
 */
function parseSingleChangelog(fileContent: string): ChangelogEntry[] {
  const sections = fileContent.split(/^## /gm).filter(Boolean)
  let countStartLine = 3 // Start after front-matter lines

  if (sections.length > 0 && !sections[0].startsWith('v')) {
    sections.shift()
  }

  return sections.map((section) => {
    const lines = section.trim().split('\n')
    const version = lines[0].trim()

    const dateLine = lines.find((l) => l.startsWith('_') && l.endsWith('_'))

    if (!dateLine) {
      throw new Error(`No date found for version ${version}`)
    }

    const startLine = countStartLine
    countStartLine += lines.length + 1

    const date = parseDate(dateLine.replace(/_/g, ''))

    const content = lines
      .slice(lines.indexOf(dateLine) + 1)
      .join('\n')
      .trim()

    return { version, date, content, startLine }
  })
}

/**
 * Converts an array of changelog file contents into an array of `ChangelogEntry` objects.
 *
 * @param filesContent - An array of strings, each representing the content of a changelog file.
 * @returns An array of `ChangelogEntry` objects parsed from the provided file contents.
 */
export function toChangelogEntries(filesContent: string[]): ChangelogEntry[] {
  return filesContent.flatMap(parseSingleChangelog)
}

/**
 * Replaces specific patterns in the changelog content to convert it into a format compatible with Docusaurus admonitions.
 *
 * Specifically, it:
 * - Replaces all occurrences of "####" with "##" to adjust heading levels.
 * - Converts blockquotes that start with a bolded title (e.g., "> **Note**") into Docusaurus admonition syntax (e.g., ":::note").
 *
 * @param content - The raw changelog content as a string.
 * @returns The modified changelog content with the specified replacements applied.
 */
export function replaceChangelogContent(content: string): string {
  return content
    .replace(/####/g, '##')
    .replace(
      /^([ \t]*)>\s*\*\*(.+?)\*\*\s*([\s\S]+?)(?=\n\1(?![ \t])|\n{2,}|$)/gm,
      (_, indent, title, body) =>
        `${indent}:::${title.replace(':', '').toLowerCase()}\n` +
        `${indent}${body.trim()}\n` +
        `${indent}:::`
    )
}

/**
 * Creates markdown files for each changelog entry in the specified directory.
 *
 * Each file is named after the version of the changelog entry and contains front-matter metadata,
 * a title, a truncate marker, and the formatted content of the changelog entry.
 *
 * @param generateDir - The directory where the markdown files will be created.
 * @param entries - An array of `ChangelogEntry` objects to be converted into markdown files.
 */
export async function createBlogFiles(generateDir: string, entries: ChangelogEntry[]) {
  await Promise.all(
    entries.map((entry) =>
      fs.outputFile(
        path.join(generateDir, `${entry.version}.md`),
        `---
mdx:
  format: md
date: ${entry.date}
---

# ${entry.version}

<!-- truncate -->

${replaceChangelogContent(entry.content)}
`
      )
    )
  )
}
