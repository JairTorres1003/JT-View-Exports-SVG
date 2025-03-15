import '@codingame/monaco-vscode-typescript-basics-default-extension'
import '@codingame/monaco-vscode-theme-defaults-default-extension'

import { type IEditorOverrideServices, initialize } from '@codingame/monaco-vscode-api'
import getConfigurationServiceOverride, {
  updateUserConfiguration,
} from '@codingame/monaco-vscode-configuration-service-override'
import getKeybindingsServiceOverride, {
  updateUserKeybindings,
} from '@codingame/monaco-vscode-keybindings-service-override'
import getLanguagesServiceOverride from '@codingame/monaco-vscode-languages-service-override'
import getQuickAccessServiceOverride from '@codingame/monaco-vscode-quickaccess-service-override'
import getTextMateServiceOverride from '@codingame/monaco-vscode-textmate-service-override'
import getThemeServiceOverride from '@codingame/monaco-vscode-theme-service-override'
import * as monaco from 'monaco-editor'

import keybindings from '../../../assets/vs/Editor/keybindings.json'

import { contextMenuServiceOverride } from './contextMenu'

import type { IStandaloneCodeEditor, TypeEditorRef } from '@/core/interfaces/components/vs/Editor'
import { getUnknownError } from '@/utils/misc'

const OVERRIDES: IEditorOverrideServices = {
  ...getConfigurationServiceOverride(),
  ...getTextMateServiceOverride(),
  ...getThemeServiceOverride(),
  ...getLanguagesServiceOverride(),
  ...getKeybindingsServiceOverride(),
  ...getQuickAccessServiceOverride({
    isKeybindingConfigurationVisible: () => true,
  }),
}

export class Editor {
  private _defaultValue = ''
  private _editorInstance?: IStandaloneCodeEditor
  private readonly _reference: TypeEditorRef
  private readonly _userConfiguration: Record<string, unknown>

  constructor(ref: TypeEditorRef, userConfiguration: Record<string, unknown>) {
    this._reference = ref
    this._userConfiguration = userConfiguration
  }

  /**
   * Creates and initializes a new instance of the code editor.
   *
   * If an existing editor instance exists, it will be disposed of before creating a new one.
   *
   * The method performs the following steps:
   * 1. Disposes of any existing editor instance.
   * 2. Initializes the editor with the provided overrides.
   * 3. Updates the user configuration.
   * 4. Updates the user keybindings.
   * 5. Creates and returns a new editor instance.
   *
   * @returns A promise that resolves to the new editor instance.
   * @throws Will log an error message if updating user configuration or keybindings fails.
   */
  public async createEditor(): Promise<IStandaloneCodeEditor> {
    if (this._editorInstance) {
      this._editorInstance.dispose()
    }

    await initialize(OVERRIDES)

    try {
      await updateUserConfiguration(JSON.stringify(this._userConfiguration))
    } catch (error) {
      console.error(`Failed to update user configuration: ${getUnknownError(error)}`)
    }

    try {
      await updateUserKeybindings(JSON.stringify(keybindings))
    } catch (error) {
      console.error(`Failed to update user keybindings: ${getUnknownError(error)}`)
    }

    const editor = this._create()

    this._editorInstance = editor

    return editor
  }

  /**
   * Creates and initializes a standalone code editor instance using the Monaco Editor.
   */
  private _create(): IStandaloneCodeEditor {
    if (!this._reference) {
      throw new Error('Editor reference is not available')
    }

    const editor = monaco.editor.create(this._reference, {
      language: 'typescript',
      value: '',
    }) as IStandaloneCodeEditor

    contextMenuServiceOverride(editor)

    const quickAccess = editor.getContribution('editor.controller.quickInput')
    quickAccess?.dispose()

    editor.setDefaultValue = this._setDefaultValue.bind(this)
    editor.getDefaultValue = this._getDefaultValue.bind(this)
    editor.resetValue = this._resetValue.bind(this)

    return editor
  }

  /**
   * Sets the default value.
   *
   * @param value - The default value to set.
   */
  private _setDefaultValue(value: string): void {
    this._editorInstance?.setValue(value)
    this._defaultValue = value
  }

  /**
   * Retrieves the default value.
   *
   * @returns The default value.
   */
  private _getDefaultValue(): string {
    return this._defaultValue
  }

  /**
   * Resets the value to the default value.
   */
  private _resetValue(): void {
    this._editorInstance?.setValue(this._getDefaultValue())
  }

  /**
   * Disposes of the editor instance.
   */
  public dispose(): void {
    this._editorInstance?.dispose()
  }
}
