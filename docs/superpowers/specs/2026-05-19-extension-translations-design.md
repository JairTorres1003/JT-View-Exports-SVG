# Extension Translations: Sync & Quality Fix

**Date:** 2026-05-19
**Package:** `packages/extension`
**Branch:** `refactor/monorepo-architecture`

## Problem

The extension has two translation layers:

- `package.nls*.json` — VS Code manifest strings (commands, config titles). These are correct and out of scope.
- `l10n/bundle.l10n.json` + 13 locale files — runtime strings translated via `vscode.l10n.t()`.

The runtime layer has drifted from the code over time, producing:

1. ~30 keys used in code that are **missing** from `bundle.l10n.json`
2. ~20 keys in `bundle.l10n.json` that are **orphaned** (no code uses them)
3. **Mixed parameter syntax**: some calls use `{0}` positional, others use `{name}` named — inconsistent and error-prone
4. **Template literal inside `l10n.t()`** (`ConfigRegistry.ts`) makes translation of that string structurally impossible
5. **Case mismatch**: bundle has `"Favorite"`/`"Recent"` but code calls `l10n.t('favorite')`/`l10n.t('recent')` (lowercase from `IconCollectionKind`) — these translations silently fail
6. **Config notification timing bug**: four config classes evaluate `l10n.t()` at class-field initialization time (module load), not at notification display time — if the user changes language without a full reload, the notification message stays in the old language

## Approach: Code-first sync

Fix the source code to be the single source of truth. Standardize all `l10n.t()` calls to use named params. Then rebuild `bundle.l10n.json` and all 13 locale files to match exactly what the code uses.

### Out of scope

- Translation quality review (the Spanish/French strings themselves)
- Adding new languages
- `packages/webview` or any other package

---

## Fix 1: Positional `{0}` → Named Params

Affects **10 call sites**. Each positional index becomes a descriptive name.

| File | Old key | New key |
|---|---|---|
| `utilities/svg/extracts.ts` | `'Failed to extract SVG exports: {0}'` | `'Failed to extract SVG exports: {error}'` |
| `messaging/MessageRouter.ts` | `'No handler found for message type: {0}'` | `'No handler found for message type: {type}'` |
| `messaging/handlers/fetch/FetchVSCodeThemeHandler.ts` | `'Theme not found for path: {0}'` | `'Theme not found for path: {path}'` |
| `messaging/handlers/fetch/FetchVSCodeThemeHandler.ts` | `'Error reading theme file for path: {0} - {1}'` | `'Error reading theme file: {path} — {error}'` |
| `messaging/handlers/fetch/FetchVsCodeThemePackageHandler.ts` | `'Error reading theme package file: {0}'` | `'Error reading theme package file: {error}'` |
| `messaging/handlers/ui/ReloadComponentHandler.ts` | `'Error processing files for reload: {0}'` | `'Error processing files for reload: {error}'` |
| `messaging/handlers/ChangeViewPathHandler.ts` | `'Error toggling view actions: {0}'` | `'Error toggling view actions: {error}'` |
| `messaging/handlers/ui/IsExpandComponentsHandler.ts` | `'Error toggling expanded icons: {0}'` | `'Error toggling expanded icons: {error}'` |
| `messaging/handlers/devtools/IsOpenDevToolsHandler.ts` | `'Error toggling developer tools: {0}'` | `'Error toggling developer tools: {error}'` |
| `commands/showMenu.ts` | `'Processing {0} file(s)...'` | `'Processing {count} file(s)...'` |
| `services/cache/CacheManager.ts` | `'No cache found for key: {0}'` | `'No cache found for key: {key}'` |

For each: update the call to pass a named arg object — e.g.
```ts
// Before
l10n.t('Error toggling view actions: {0}', getUnknownError(error))
// After
l10n.t('Error toggling view actions: {error}', { error: getUnknownError(error) })
```

---

## Fix 2: Template Literal in `l10n.t()`

**File:** `services/config/base/ConfigRegistry.ts` line ~41

```ts
// Before — dynamic key, untranslatable
throw new Error(vsc.l10n.t(`No config found for key: ${String(key)}`))

// After — fixed key with named param
throw new Error(vsc.l10n.t('No config found for key: {key}', { key: String(key) }))
```

---

## Fix 3: Case Mismatch for Collection Kind Keys

**Root cause:** `IconCollectionKind.FAVORITE = 'favorite'` and `IconCollectionKind.RECENT = 'recent'` (lowercase). `getIconsCollection.ts` calls `l10n.t(collection)` with these lowercase values. The bundle currently has `"Favorite"` and `"Recent"` (capitalized) — these never match.

**Fix:** Rename bundle keys from capitalized to lowercase. Locale files updated accordingly. No code change needed (the call site is correct).

```json
// Before (wrong)
{ "Favorite": "Favorite", "Recent": "Recent" }

// After (correct)
{ "favorite": "Favorite", "recent": "Recent" }
```

Spanish example:
```json
// Before
{ "Favorite": "Favoritos", "Recent": "Recientes" }

// After
{ "favorite": "Favoritos", "recent": "Recientes" }
```

---

## Fix 4: Config Notification Timing

**Files:**
- `services/config/GroupPatternsConfig.ts`
- `services/config/DefaultIconPropertiesConfig.ts`
- `services/config/ShowNotExportedIconsConfig.ts`
- `services/config/IgnoreDirectoriesConfig.ts`

**Problem:** `readonly notification = { message: l10n.t('...') }` evaluates `l10n.t` at class instantiation (module load time), not when the notification is shown.

**Fix:** Convert to a getter so `l10n.t()` is called lazily each time `notification` is accessed:

```ts
// Before
readonly notification: ConfigNotification = {
  message: l10n.t('Group patterns changed. Reload the panel to apply.'),
}

// After
override get notification(): ConfigNotification {
  return {
    message: l10n.t('Group patterns changed. Reload the panel to apply.'),
  }
}
```

Same pattern for all four config files. The `override` keyword is valid here — `ConfigManager` base class declares `readonly notification?: ConfigNotification`, and TypeScript allows a getter to override an optional property in a subclass.

---

## Fix 5: bundle.l10n.json Rebuild

After Fixes 1–4, rebuild `bundle.l10n.json` to match exactly what the code uses.

### Keys to REMOVE (orphaned)

```
"CacheManager has not been initialized"         ← code uses "CacheManager not initialized."
"Declaration named {name} not found in file {file}"
"Error extracting SVG component: {name}"        ← code uses {error} variant
"Error generating SVG playground {error}"
"Error generating SVG component: {error}"       ← code uses playground-specific string
"Error getting assets path: {error}"            ← not used via l10n
"Error getting language from file: {error}"     ← not used via l10n
"Error loading cache"                           ← not used via l10n
"Error posting message to webview:"             ← not used via l10n
"Error retrieving icons: {error}"               ← not used via l10n
"Error saving cache"                            ← not used via l10n
"Error scanning files: {error}"                 ← not used via l10n
"Error scanning workspace: {error}"             ← not used via l10n
"Error setting webview message listener"        ← not used via l10n
"Error toggling favorite status for icon {name}"← not used via l10n
"Favorite"                                      ← renamed to "favorite" (see Fix 3)
"File saved successfully."                      ← code uses the {filePath} variant
"Icons in the temp directory cannot be added to favorites."
"Icons in the temp directory cannot be added to recent icons."
"Missing main file in manifest"                 ← code uses "Invalid webview manifest"
"No handler found for event:"                   ← code uses "No handler found for message type: {type}"
"Recent"                                        ← renamed to "recent" (see Fix 3)
"Reloading..."                                  ← not used via l10n
"SVG component named {name} not found in file {file}"
"SVG components not found in file {file}"
```

Note: `"{kind} icons"` is NOT removed — it is actively used in `getIconsCollection.ts`.

### Keys to ADD (missing from bundle, in code)

```
"CacheManager not initialized."
"Clearing icons collection cache..."
"Component with name \"{name}\" not found in file \"{file}\""
"ConfigRegistry not initialized. Call initConfig(context) first."
"Default icon properties changed. Reload the panel to apply."
"Error editing component: {error}"
"Error generating SVG component in playground: {error}"
"Error processing SVG component in playground."
"Error processing files for reload: {error}"
"Error processing uploaded files"
"Error reading theme file: {path} — {error}"
"Error reading theme package file: {error}"
"Error reloading editor extension theme"
"Error toggling developer tools: {error}"
"Error toggling expanded icons: {error}"
"Error toggling view actions: {error}"
"Failed to add icon to collection: {message}"
"Failed to extract SVG exports: {error}"
"File with id {id} not found in cache."
"Group patterns changed. Reload the panel to apply."
"Icon collection \"{collection}\" has reached its limit of {max} icons."
"Icons in the temp directory cannot be added to the \"{collection}\" collection."
"Ignore directories changed. Reload the panel to apply."
"Invalid webview manifest"
"Loading..."
"Message router not registered"
"No"
"No cache found for key: {key}"
"No config found for key: {key}"
"No files found in the workspace."
"No handler found for message type: {type}"
"Processing {count} file(s)..."
"Reload"
"Scanning workspace..."
"The \"Show not exported icons\" setting changed. Reload the panel to apply."
"Theme not found for path: {path}"
"Theme package not found"
"Yes"
"favorite"
"recent"
```

---

## Fix 6: All 13 Locale Files

For each locale file (`bundle.l10n.es.json`, `bundle.l10n.fr.json`, etc.):

1. Remove the same orphaned keys as in the English base
2. Rename `"Favorite"` → `"favorite"` and `"Recent"` → `"recent"` (key rename, keep existing translated value)
3. Add all newly-required keys with the **English string as placeholder** (VS Code falls back to English for missing keys anyway; this makes the files explicit about what needs translation)

---

## Files Changed

**TypeScript source (code fixes):**
- `src/utilities/svg/extracts.ts`
- `src/messaging/MessageRouter.ts`
- `src/messaging/handlers/fetch/FetchVSCodeThemeHandler.ts`
- `src/messaging/handlers/fetch/FetchVsCodeThemePackageHandler.ts`
- `src/messaging/handlers/ui/ReloadComponentHandler.ts`
- `src/messaging/handlers/ChangeViewPathHandler.ts`
- `src/messaging/handlers/ui/IsExpandComponentsHandler.ts`
- `src/messaging/handlers/devtools/IsOpenDevToolsHandler.ts`
- `src/commands/showMenu.ts`
- `src/services/cache/CacheManager.ts`
- `src/services/config/base/ConfigRegistry.ts`
- `src/services/config/GroupPatternsConfig.ts`
- `src/services/config/DefaultIconPropertiesConfig.ts`
- `src/services/config/ShowNotExportedIconsConfig.ts`
- `src/services/config/IgnoreDirectoriesConfig.ts`

**Translation files:**
- `l10n/bundle.l10n.json` (English base — full rebuild)
- `l10n/bundle.l10n.es.json`
- `l10n/bundle.l10n.fr.json`
- `l10n/bundle.l10n.de.json`
- `l10n/bundle.l10n.it.json`
- `l10n/bundle.l10n.ja.json`
- `l10n/bundle.l10n.ko.json`
- `l10n/bundle.l10n.pl.json`
- `l10n/bundle.l10n.pt-br.json`
- `l10n/bundle.l10n.ru.json`
- `l10n/bundle.l10n.tr.json`
- `l10n/bundle.l10n.zh-cn.json`
- `l10n/bundle.l10n.zh-tw.json`
- `l10n/bundle.l10n.cs.json`

---

## Verification

After implementation:

1. `pnpm typecheck` — no new type errors
2. `pnpm lint` — Biome clean
3. `pnpm test:extension` — tests pass
4. Manual spot-check: change VS Code language to Spanish, trigger a scan, verify "Scanning workspace..." and notification messages appear in Spanish
