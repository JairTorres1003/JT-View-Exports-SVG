import type { ExtensionManage } from '@api/interfaces/vscode'
import { type IEditorOverrideServices, initialize } from '@codingame/monaco-vscode-api'
import getConfigurationServiceOverride, {
  initUserConfiguration,
  updateUserConfiguration,
} from '@codingame/monaco-vscode-configuration-service-override'
import getKeybindingsServiceOverride, {
  initUserKeybindings,
  updateUserKeybindings,
} from '@codingame/monaco-vscode-keybindings-service-override'
import getLanguagesServiceOverride from '@codingame/monaco-vscode-languages-service-override'
import getQuickAccessServiceOverride from '@codingame/monaco-vscode-quickaccess-service-override'
import getTextMateServiceOverride from '@codingame/monaco-vscode-textmate-service-override'
import getThemeServiceOverride from '@codingame/monaco-vscode-theme-service-override'
import * as monaco from 'monaco-editor'
import keybindings from 'public/vs/userConfiguration/keybindings.json'

import { contextMenuServiceOverride } from './contextMenu'
import { activateDefaultExtensions } from './extensions/init'

import type { IStandaloneCodeEditor, TypeEditorRef } from '@/core/types/components/vs/Editor'
import i18next from '@/i18n'
import { getUnknownError } from '@/utils/misc'

const OVERRIDES: IEditorOverrideServices = {
  ...getConfigurationServiceOverride(),
  ...getTextMateServiceOverride(),
  ...getThemeServiceOverride(),
  ...getQuickAccessServiceOverride({
    isKeybindingConfigurationVisible: () => true,
  }),
  ...getLanguagesServiceOverride(),
  ...getKeybindingsServiceOverride(),
}

let initialized = false

export class Editor {
  private _defaultValue = ''
  private _editorInstance?: IStandaloneCodeEditor
  private readonly _reference: TypeEditorRef
  private readonly _userConfiguration: Record<string, unknown>
  private readonly _extensionTheme?: ExtensionManage

  constructor(
    ref: TypeEditorRef,
    userConfiguration: Record<string, unknown>,
    extensionTheme?: ExtensionManage
  ) {
    this._reference = ref
    this._userConfiguration = userConfiguration
    this._extensionTheme = extensionTheme
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

    await this.applyConfigurations(initialized)

    if (!initialized) {
      await initialize(OVERRIDES)

      await activateDefaultExtensions({ extensionTheme: this._extensionTheme })

      initialized = true
    }

    const editor = this._create()

    this._editorInstance = editor

    return editor
  }

  /**
   * Applies the user configuration and keybindings to the editor.
   *
   * Depending on whether the editor has been initialized, this method will either
   * initialize or update the user configuration and keybindings.
   *
   * @param isInitialized - Indicates if the editor has already been initialized.
   *   If `true`, the method updates the existing configuration and keybindings.
   *   If `false`, it initializes them.
   * @returns A promise that resolves when the configurations and keybindings have been applied.
   * @throws Logs an error to the console if applying the configuration or keybindings fails.
   */
  public async applyConfigurations(isInitialized = false): Promise<void> {
    const applyUserConfiguration = isInitialized ? updateUserConfiguration : initUserConfiguration
    const applyUserKeybindings = isInitialized ? updateUserKeybindings : initUserKeybindings

    try {
      await applyUserConfiguration(JSON.stringify(this._userConfiguration))
    } catch (error) {
      console.error(
        `${i18next.t('errors.FailedToUpdateUserConfiguration')}: ${getUnknownError(error)}`
      )
    }

    try {
      await applyUserKeybindings(JSON.stringify(keybindings))
    } catch (error) {
      console.error(
        `${i18next.t('errors.FailedToUpdateUserKeybindings')}: ${getUnknownError(error)}`
      )
    }
  }

  /**
   * Creates and initializes a standalone code editor instance using the Monaco Editor.
   */
  private _create(): IStandaloneCodeEditor {
    if (!this._reference) {
      throw new Error(i18next.t('errors.EditorReferenceIsNotAvailable'))
    }

    this._reference?.editorLoader?.().start(1000, () => {
      this._reference?.style.setProperty('opacity', '1')
    })
    this._reference?.style.setProperty('opacity', '0')

    const overflowWidgetsDomNode = document.getElementById('overflow_widgets_dom_node') ?? undefined
    const theme = this._userConfiguration['workbench.colorTheme'] as string

    const editor = monaco.editor.create(this._reference, {
      language: 'javascript',
      value: '',
      theme,
      automaticLayout: true,
      overflowWidgetsDomNode,
      fixedOverflowWidgets: true,
    }) as IStandaloneCodeEditor

    contextMenuServiceOverride(editor)

    const quickAccess = editor.getContribution('editor.controller.quickInput')
    quickAccess?.dispose()

    editor.setDefaultValue = this._setDefaultValue.bind(this)
    editor.getDefaultValue = this._getDefaultValue.bind(this)
    editor.resetValue = this._resetValue.bind(this)
    editor.reload = this._reload.bind(this)

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

  /**
   * Reloads the editor instance.
   *
   * This method disposes of the current editor instance and creates a new one.
   * It also sets the default value and focuses the new editor instance.
   */
  private _reload(): void {
    const defaultValue = this._editorInstance?.getDefaultValue() ?? ''
    this._editorInstance?.dispose()
    this.createEditor()
      .then((editor) => {
        this._setDefaultValue(defaultValue)
        editor.focus()
      })
      .catch((error) => {
        console.error(`${i18next.t('errors.FailedToReloadEditor')}: ${getUnknownError(error)}`)
      })
  }
}
