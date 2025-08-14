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

import type {
  EditorConfigurations,
  IStandaloneCodeEditor,
  IUpdateConfig,
  TypeEditorRef,
} from '@/core/types/components/vs/Editor'
import i18next from '@/i18n'
import type { RequiredExcept } from '@/types/misc'
import { getUnknownError } from '@/utils/misc'
import keybindings from 'public/vs/userConfiguration/keybindings.json'

import { contextMenuServiceOverride } from './contextMenu'
import { activateDefaultExtensions } from './extensions/init'

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
  private _userConfiguration: Record<string, unknown>
  private readonly _configurations: RequiredExcept<Partial<EditorConfigurations>, 'language'>
  private _completions: Record<string, monaco.IDisposable | null> = {}

  constructor(
    ref: TypeEditorRef,
    config: RequiredExcept<Partial<EditorConfigurations>, 'userConfiguration'>
  ) {
    this._reference = ref
    this._userConfiguration = config.userConfiguration
    this._configurations = {
      ...config,
      language: config.language ?? 'javascript',
    }
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

    if (!initialized) {
      await this.applyConfigurations()

      await initialize(OVERRIDES)

      initialized = true
    }

    const editor = this._create()

    await activateDefaultExtensions(this._configurations)

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

    const editor = monaco.editor.create(this._reference, {
      language: this._configurations.language,
      value: '',
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
    editor.api = {
      registerCompletionItemProvider: this._registerCompletionItemProvider.bind(this),
      updateUserConfiguration: this._updateUserConfiguration.bind(this),
    }

    editor.onDidChangeModelContent(() => {
      const value = editor.getValue()
      this._configurations.onChange?.(value)
    })

    Array.from(editor.getContainerDomNode().querySelectorAll('textarea')).forEach((textarea) => {
      textarea.setAttribute('aria-label', 'Editor Text Area')
    })

    return editor
  }

  /**
   * Updates the user configuration of the editor instance.
   *
   * @param userConfiguration - The new user configuration to apply.
   * @returns A promise that resolves when the user configuration has been updated.
   */
  private async _updateUserConfiguration(config: IUpdateConfig): Promise<void> {
    this._userConfiguration = config.userConfiguration
    this._configurations.userConfiguration = config.userConfiguration
    this._configurations.extensionTheme = config.extensionTheme

    if (!this._editorInstance) {
      throw new Error(i18next.t('errors.EditorReferenceIsNotAvailable'))
    }

    this._reference?.editorLoader?.().start(1000, () => {
      this._reference?.style.setProperty('opacity', '1')
    })
    this._reference?.style.setProperty('opacity', '0')

    await this.applyConfigurations(true)

    let currentThemeId = this._userConfiguration?.['workbench.colorTheme'] as string

    if (!currentThemeId) {
      const kind = document
        .querySelector('[data-vscode-theme-kind]')
        ?.getAttribute('data-vscode-theme-kind')
      currentThemeId = kind === 'vscode-dark' ? 'Default Dark+' : 'Default Light+'
    }

    const themes = await this._editorInstance?._themeService.getColorThemes()
    const settingsId = themes.map((theme) => theme.settingsId)

    if (!settingsId.includes(currentThemeId)) {
      await activateDefaultExtensions(config)
    }

    const defaultValue = this._editorInstance?.getDefaultValue() ?? ''
    this._setDefaultValue(defaultValue)
    this._editorInstance?.focus()
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
   * Registers a completion item provider for the editor instance.
   *
   * @param provider - The completion item provider to register.
   * @returns A disposable object that can be used to unregister the provider.
   */
  private _registerCompletionItemProvider(
    name: string,
    provider: monaco.languages.CompletionItemProvider
  ) {
    if (!this._editorInstance) return

    if (this._completions[name]) {
      this._completions[name]?.dispose()
    }

    const register = monaco.languages.registerCompletionItemProvider(
      this._configurations.language,
      provider
    )

    this._completions[name] = register

    return register
  }

  /**
   * Disposes of the editor instance.
   */
  public dispose(): void {
    this._editorInstance?.dispose()
    initialized = false
    this._editorInstance = undefined
  }
}
