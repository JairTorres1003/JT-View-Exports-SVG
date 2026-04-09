import fs from 'node:fs'
import path from 'node:path'

const CACHE_FILE = path.resolve('.cache/svg-components.json')

export function loadCache<T>() {
  if (!fs.existsSync(CACHE_FILE)) return null

  const raw = fs.readFileSync(CACHE_FILE, 'utf-8')
  return JSON.parse(raw) as T
}

export function saveCache(data: unknown) {
  fs.mkdirSync(path.dirname(CACHE_FILE), { recursive: true })
  fs.writeFileSync(CACHE_FILE, JSON.stringify(data))
}
