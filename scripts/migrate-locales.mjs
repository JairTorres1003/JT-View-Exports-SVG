#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const LOCALES_DIR = resolve(ROOT, 'packages/webview/src/i18n/locales')

const LANGUAGES = [
  'es',
  'cs',
  'de',
  'fr',
  'it',
  'ja',
  'ko',
  'pl',
  'pt-br',
  'ru',
  'tr',
  'zh-cn',
  'zh-tw',
]
const NAMESPACES = ['common', 'errors', 'home', 'upload', 'dev-tools', 'dev-tools.editor']

// [oldKey, newKey] — oldKey null means always inject from en/
const MAPPINGS = {
  errors: [
    ['errors.UnknownError', 'unknown'],
    ['errors.FailedToFindTheRootElement', 'root-element-not-found'],
    ['errors.TheComponentIsEmpty', 'component-empty'],
    ['errors.TheFollowingFilesAreNotSupported', 'unsupported-files'],
    ['errors.ErrorCreatingTemporaryFile', 'failed-to-create-temporary-file'],
    ['errors.VSCodeApiIsNotAvailable', 'vscode-api.not-available'],
    ['errors.[VSCodeAPIWrapper]ErrorOccurredWhileHandlingMessage:', 'vscode-api.handling-error'],
    ['errors.FailedToUpdateUserConfiguration', 'editor.failed-to-update-configuration'],
    ['errors.FailedToUpdateUserKeybindings', 'editor.failed-to-update-keybindings'],
    ['errors.EditorReferenceIsNotAvailable', 'editor.reference-not-available'],
    ['errors.FailedToActivateExtensionTheme', 'editor.failed-to-activate-theme'],
    ['errors.FailedToFetchExtensionTheme', 'editor.failed-to-fetch-theme'],
    ['errors.FailedToInitializeEditor', 'editor.failed-to-initialize'],
    ['errors.ErrorApplyingInitialColor', 'editor.failed-to-apply-color'],
  ],
  common: [
    ['labels.Yes', 'yes'],
    ['labels.No', 'no'],
    ['labels.Close', 'close'],
    ['labels.Cancel', 'cancel'],
    ['labels.Search', 'search'],
    ['labels.Clear', 'clear'],
    ['labels.Info', 'info'],
    ['labels.Loading', 'loading'],
    ['labels.Refresh', 'refresh'],
    ['labels.Errors', 'errors'],
    ['labels.OpenFile', 'open-file'],
    ['labels.OpenManyFiles', 'open-many-files'],
    ['labels.CopyName', 'copy-name'],
    ['labels.CopyCodeSnippet', 'copy-code-snippet'],
    ['labels.ClearCollection', 'clear-collection'],
    ['labels.ClearCollectionConfirm', 'clear-collection-confirm'],
    ['labels.Copied {{value}} to clipboard', 'copied-to-clipboard'],
    ['labels.ListOfAssociatedFilesFor', 'list-of-associated-files-for'],
    ['pickers.color.title', 'pickers.color.title'],
    ['modalInfo.title', 'modal-info.title'],
    ['modalInfo.FileName', 'modal-info.file-name'],
    ['modalInfo.Language', 'modal-info.language'],
    ['modalInfo.IsTemporaryFile', 'modal-info.is-temporary-file'],
    ['modalInfo.IncludesTemporaryFiles', 'modal-info.includes-temporary-files'],
    ['modalInfo.Path', 'modal-info.path'],
    ['modalInfo.ShowNoExports', 'modal-info.show-no-exports'],
    ['modalInfo.ComponentsExported', 'modal-info.components-exported'],
    ['modalInfo.ComponentsNotExported', 'modal-info.components-not-exported'],
    ['modalInfo.TotalComponents', 'modal-info.total-components'],
    ['modalInfo.FilesCount', 'modal-info.files-count'],
    ['modalInfo.GroupKindName', 'modal-info.group-kind-name'],
  ],
  upload: [
    ['labels.ExtractComponents', 'extract-components'],
    ['labels.AddMoreFiles', 'add-more-files'],
    ['labels.SortFilesByName', 'sort-files-by-name'],
    ['labels.DeleteThisFile', 'delete-this-file'],
    ['labels.NoFilesSelected', 'no-files-selected'],
    ['labels.FilesLoaded', 'files-loaded_one'],
    ['labels.FilesLoaded2', 'files-loaded_other'],
    ['labels.ProcessingFiles', 'processing-files'],
  ],
  home: [
    ['DropZone.title', 'drop-zone.title'],
    ['DropZone.Select files', 'drop-zone.select-files'],
    ['DropZone.or drop the files here', 'drop-zone.or-drop-files-here'],
    ['DropZone.Let it go!', 'drop-zone.let-it-go'],
  ],
  'dev-tools': [
    ['DevTools.title', 'title'],
    ['DevTools.playground.title', 'playground.title'],
    ['DevTools.playground.HideCode', 'playground.hide-code'],
    ['DevTools.playground.ShowCode', 'playground.show-code'],
    ['DevTools.playground.CopyCode', 'playground.copy-code'],
    ['DevTools.playground.ResetCode', 'playground.reset-code'],
    ['DevTools.playground.MoreActions', 'playground.more-actions'],
    ['DevTools.playground.OpenInEditor', 'playground.open-in-editor'],
    ['DevTools.playground.CopyAsSVG', 'playground.copy-as-svg'],
    ['DevTools.playground.CopyAsPNG', 'playground.copy-as-png'],
    ['DevTools.playground.DownloadAsSVG', 'playground.download-as-svg'],
    ['DevTools.playground.DownloadAsPNG', 'playground.download-as-png'],
    ['DevTools.info.title', 'info.title'],
    ['DevTools.info.componentName', 'info.component-name'],
    ['DevTools.info.typeDeclaration', 'info.type-declaration'],
    ['DevTools.info.isExported', 'info.is-exported'],
    ['DevTools.info.isAnimated', 'info.is-animated'],
    ['DevTools.info.isFavorite', 'info.is-favorite'],
    ['DevTools.menu.ReloadPlayground', 'menu.reload-playground'],
    ['DevTools.menu.ReloadEditor', 'menu.reload-editor'],
    ['DevTools.menu.DisableWordWrap', 'menu.disable-word-wrap'],
    ['DevTools.menu.EnableWordWrap', 'menu.enable-word-wrap'],
  ],
  'dev-tools.editor': [
    [
      'DevTools.editor.suggestions.components.details.static',
      'suggestions.components.details.static',
    ],
    [
      'DevTools.editor.suggestions.components.details.animated',
      'suggestions.components.details.animated',
    ],
    [
      'DevTools.editor.suggestions.components.details.temporary-static',
      'suggestions.components.details.temporary-static',
    ],
    [
      'DevTools.editor.suggestions.components.details.temporary-animated',
      'suggestions.components.details.temporary-animated',
    ],
    [
      'DevTools.editor.suggestions.components.documentation',
      'suggestions.components.documentation',
    ],
    [
      'DevTools.editor.suggestions.components.documentation_withRestProps',
      'suggestions.components.documentation-with-rest-props',
    ],
    [
      'DevTools.editor.suggestions.properties.details.static',
      'suggestions.properties.details.static',
    ],
  ],
}

function setByPath(obj, path, value) {
  const parts = path.split('.')
  let cur = obj

  for (let i = 0; i < parts.length - 1; i++) {
    if (cur[parts[i]] == null) cur[parts[i]] = {}
    cur = cur[parts[i]]
  }

  cur[parts[parts.length - 1]] = value
}

function getByPath(obj, path) {
  return path.split('.').reduce((cur, part) => {
    if (cur == null || typeof cur !== 'object') return undefined
    return cur[part]
  }, obj)
}

function getOldValue(obj, oldKey) {
  const tokens = oldKey.split('.')

  function walk(cur, index) {
    if (index >= tokens.length) return cur
    if (cur == null || typeof cur !== 'object') return undefined

    for (let end = tokens.length; end > index; end--) {
      const candidate = tokens.slice(index, end).join('.')
      if (Object.hasOwn(cur, candidate)) {
        const found = walk(cur[candidate], end)
        if (found !== undefined) return found
      }
    }

    return undefined
  }

  return walk(obj, 0)
}

function readEnFallbacks() {
  return Object.fromEntries(
    NAMESPACES.map((namespace) => [
      namespace,
      JSON.parse(readFileSync(resolve(LOCALES_DIR, 'en', `${namespace}.json`), 'utf-8')),
    ])
  )
}

function migrateLanguage(lang, enFallbacks) {
  const flatPath = resolve(LOCALES_DIR, `${lang}.json`)

  if (!existsSync(flatPath)) {
    console.warn(`[SKIP] ${lang}: flat file not found at ${flatPath}`)
    return
  }

  const flat = JSON.parse(readFileSync(flatPath, 'utf-8'))
  const outDir = resolve(LOCALES_DIR, lang)
  mkdirSync(outDir, { recursive: true })

  for (const [namespace, pairs] of Object.entries(MAPPINGS)) {
    const output = {}

    for (const [oldKey, newKey] of pairs) {
      let value

      if (oldKey === null) {
        value = getByPath(enFallbacks[namespace], newKey)
        if (value === undefined) {
          console.warn(`  [WARN] ${lang}/${namespace}: en fallback missing for "${newKey}"`)
          continue
        }
        console.log(`  [INJECT] ${lang}/${namespace}: "${newKey}" from en`)
      } else {
        value = getOldValue(flat, oldKey)

        if (value === undefined) {
          const fallbackValue = getByPath(enFallbacks[namespace], newKey)
          if (fallbackValue === undefined) {
            console.warn(
              `  [WARN] ${lang}/${namespace}: "${oldKey}" missing, no en fallback for "${newKey}"`
            )
            continue
          }

          console.warn(`  [WARN] ${lang}/${namespace}: "${oldKey}" missing, using en fallback`)
          value = fallbackValue
        }
      }

      setByPath(output, newKey, value)
    }

    const outPath = resolve(outDir, `${namespace}.json`)
    writeFileSync(outPath, `${JSON.stringify(output, null, 2)}\n`, 'utf-8')
    console.log(`  [OK] wrote ${lang}/${namespace}.json`)
  }

  rmSync(flatPath)
  console.log(`  [DEL] removed ${lang}.json`)
}

function main() {
  const enFallbacks = readEnFallbacks()
  console.log('Starting locale migration...\n')

  for (const lang of LANGUAGES) {
    console.log(`→ ${lang}`)
    migrateLanguage(lang, enFallbacks)
    console.log()
  }

  console.log('Done.')
}

main()
