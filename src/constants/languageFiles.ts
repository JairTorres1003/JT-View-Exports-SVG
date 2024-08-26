import { type LanguageFile } from '@/interfaces/vscode'

/**
 * Represents an array of language files.
 */
export const LANGUAGES: LanguageFile[] = [
  {
    name: 'javascript',
    extensions: ['js', 'jsx'],
  },
  {
    name: 'typescript',
    extensions: ['ts', 'tsx'],
  },
]
