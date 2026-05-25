import { Uri } from 'vscode'

export const extensionUri: Uri = Uri.file(process.cwd())
export const testFolderUri: Uri = Uri.joinPath(extensionUri, 'src', 'test')
