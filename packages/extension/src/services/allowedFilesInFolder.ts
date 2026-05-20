import * as path from 'path'
import { FileType, l10n, Uri, workspace } from 'vscode'

import { REGEX_FILE } from '@/constants/regex'
import { getConfig } from '@/services/config'
import { matchesPattern } from '@/utilities/misc'

const CONCURRENCY_LIMIT = 10

/**
 * Recursively collects allowed files from a folder.
 */
async function collectFiles(
  folder: Uri,
  patterns: string[],
  semaphore: { count: number }
): Promise<Uri[]> {
  let entries: [string, FileType][]

  try {
    entries = await workspace.fs.readDirectory(folder)
  } catch (error) {
    console.error(l10n.t('Error reading directory "{file}":', { file: folder.fsPath }), error)
    return []
  }

  const fileResults: Uri[] = []
  const pendingDirs: Uri[] = []

  for (const [name, type] of entries) {
    const uri = Uri.joinPath(folder, name)

    if (type === FileType.Directory) {
      // Normalize with trailing slash for directory pattern matching.
      const dirPath = uri.fsPath + (uri.fsPath.endsWith(path.sep) ? '' : path.sep)
      if (!matchesPattern(patterns, dirPath)) {
        pendingDirs.push(uri)
      }
    } else if (type === FileType.File) {
      if (REGEX_FILE.test(path.extname(name))) {
        fileResults.push(uri)
      }
    }
  }

  // Process subdirectories in batches using a concurrency limit.
  const subResults = await processWithConcurrency(
    pendingDirs,
    (dir) => collectFiles(dir, patterns, semaphore),
    CONCURRENCY_LIMIT
  )

  return [...fileResults, ...subResults.flat()]
}

/**
 * Executes async tasks in fixed-size batches.
 */
async function processWithConcurrency<T>(
  items: T[],
  fn: (item: T) => Promise<T[]>,
  limit: number
): Promise<T[][]> {
  const results: T[][] = []

  for (let i = 0; i < items.length; i += limit) {
    const batch = items.slice(i, i + limit)
    const batchResults = await Promise.all(batch.map(fn))
    results.push(...batchResults)
  }

  return results
}

/**
 * Returns all allowed files for a folder.
 */
export async function allowedFilesInFolder(folder: Uri): Promise<Uri[]> {
  if (!folder?.fsPath) return []

  const patterns = getConfig().get('ignoreDirectories').allDirectories

  return collectFiles(folder, patterns, { count: 0 })
}
