import '@codingame/monaco-vscode-typescript-basics-default-extension'
import '@codingame/monaco-vscode-theme-defaults-default-extension'

import { type IEditorOverrideServices, initialize } from '@codingame/monaco-vscode-api'
import getConfigurationServiceOverride, {
  updateUserConfiguration,
} from '@codingame/monaco-vscode-configuration-service-override'
import getLanguagesServiceOverride from '@codingame/monaco-vscode-languages-service-override'
import getTextMateServiceOverride from '@codingame/monaco-vscode-textmate-service-override'
import getThemeServiceOverride from '@codingame/monaco-vscode-theme-service-override'
import * as monaco from 'monaco-editor'
import { useEffect, useRef, useState } from 'react'

import { useForkRef } from '../useForkRef'

import { useSelector } from '@/providers/redux/store'
import { getUnknownError } from '@/utils/misc'

export type TypeEditorRef = (HTMLElement & { editor?: monaco.editor.IStandaloneCodeEditor }) | null

interface EditorHook {
  rootRef: React.RefCallback<Exclude<TypeEditorRef, 'null'>> | null
}

interface EditorHookProps {
  forwardedRef: React.ForwardedRef<TypeEditorRef>
}

const OVERRIDES: IEditorOverrideServices = {
  ...getConfigurationServiceOverride(),
  ...getTextMateServiceOverride(),
  ...getThemeServiceOverride(),
  ...getLanguagesServiceOverride(),
}

export const useEditor = ({ forwardedRef }: EditorHookProps): EditorHook => {
  const [isInitialized, setIsInitialized] = useState(false)
  const { editorConfig } = useSelector((state) => state.vsCode)

  const editorRef = useRef<TypeEditorRef>(null)

  const forkedRef = useForkRef(editorRef, forwardedRef)

  /**
   * Updates the user configuration if the editor is initialized.
   *
   * This function serializes the current editor configuration and sends it to the
   * `updateUserConfiguration` function. If the update fails, it logs an error message
   * to the console.
   *
   * @returns This function does not return a value.
   */
  const updateConfig = () => {
    if (!isInitialized) return

    updateUserConfiguration(JSON.stringify(editorConfig)).catch((error) => {
      console.error(`Failed to update user configuration: ${getUnknownError(error)}`)
    })
  }

  /**
   * Initializes the Monaco editor instance if it hasn't been initialized yet.
   *
   * This function checks if the editor reference is available and if the editor
   * has already been initialized. If not, it proceeds to initialize the editor
   * with the provided overrides. Once the initialization is successful, it sets
   * the `isInitialized` state to true and creates a new Monaco editor instance
   * with a default JavaScript function as its content.
   *
   * If the initialization fails, it logs an error message to the console.
   */
  const initializeEditor = () => {
    if (!editorRef.current || isInitialized) return

    initialize(OVERRIDES)
      .then(() => {
        if (!editorRef.current) return

        setIsInitialized(true)

        const newEditor = monaco.editor.create(editorRef.current, {
          value: 'function hello() {\n  console.log("Hello, world!");\n}',
          language: 'typescript',
        })

        editorRef.current.editor = newEditor
      })
      .catch((error) => {
        console.error(`Failed to initialize editor: ${getUnknownError(error)}`)
      })
  }

  useEffect(updateConfig, [editorConfig, isInitialized])

  useEffect(() => {
    initializeEditor()

    return () => {
      if (editorRef.current?.editor) {
        editorRef.current.editor.dispose()
      }
    }
  }, [])

  return {
    rootRef: forkedRef,
  }
}
