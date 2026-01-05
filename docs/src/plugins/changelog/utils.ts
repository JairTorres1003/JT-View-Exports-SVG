import fs from 'fs-extra'
import path from 'path'

type ChangelogEntry = {
  version: string
  date: string
  content: string
}

function parseDate(raw: string): string {
  return new Date(raw).toISOString().split('T')[0]
}

function parseSingleChangelog(fileContent: string): ChangelogEntry[] {
  const sections = fileContent.split(/^## /gm).filter(Boolean)

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

    const date = parseDate(dateLine.replace(/_/g, ''))

    const content = lines
      .slice(lines.indexOf(dateLine) + 1)
      .join('\n')
      .trim()

    return { version, date, content }
  })
}

export function toChangelogEntries(filesContent: string[]): ChangelogEntry[] {
  return filesContent.flatMap(parseSingleChangelog)
}

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

${entry.content?.replace(/####/g, '##')}
`
      )
    )
  )
}
