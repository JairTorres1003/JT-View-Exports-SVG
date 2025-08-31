import type { MenuItemAction } from '@codingame/monaco-vscode-api/vscode/vs/platform/actions/common/actions'
import type * as monaco from 'monaco-editor'

const keepIds = [
  'editor.action.clipboardCutAction',
  'editor.action.clipboardCopyAction',
  'editor.action.clipboardPasteAction',
]

interface EditorContributionOverride extends monaco.editor.IEditorContribution {
  _getMenuActions: () => MenuItemAction[]
}

type IEditorContribution = EditorContributionOverride | undefined | null

/**
 * Overrides the context menu service of the Monaco editor to filter menu actions.
 *
 * @param editor - The Monaco editor instance.
 *
 * This function retrieves the context menu contribution from the editor and overrides its `_getMenuActions` method.
 * The overridden method filters the menu actions to include only those with IDs present in the `keepIds` array.
 */
export function contextMenuServiceOverride(editor: monaco.editor.IStandaloneCodeEditor) {
  const contextmenu = editor.getContribution('editor.contrib.contextmenu') as IEditorContribution

  if (!contextmenu) return

  const realMethod = contextmenu._getMenuActions

  contextmenu._getMenuActions = function (...args) {
    const items = realMethod.apply(contextmenu, args)
    return items.filter((item) => keepIds.includes(item.id))
  }
}
