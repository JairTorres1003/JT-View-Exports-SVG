import { type VsCodeStyles } from '@api/interfaces/vscode'
import { type Theme, type Components } from '@mui/material/styles'

export type CustomizationsFunction = (styles: Partial<VsCodeStyles>) => Components<Theme>

export * from './dataDisplay'
export * from './inputs'
export * from './surfaces'
