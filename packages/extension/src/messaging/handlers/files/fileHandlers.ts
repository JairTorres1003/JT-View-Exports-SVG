import { OpenFileInEditorHandler } from './OpenFileInEditorHandler'

export function createFileHandlers() {
  return [new OpenFileInEditorHandler()]
}
