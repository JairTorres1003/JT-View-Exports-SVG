import { VsCodeStyles } from '@api/interfaces/vscode'
import type { Theme, Components } from '@mui/material/styles'

export interface ProviderProps {
  readonly children: React.ReactNode
}

/**
 * Represents the base props for an icon.
 */
export interface IconBaseProps {
  /**
   * The color of the icon.
   *
   * @default 'currentColor'
   */
  color?: React.CSSProperties['color']
  /**
   * The size of the icon.
   * @default 32
   */
  size?: React.CSSProperties['width']
  /**
   * The class name of the icon.
   * @default ''
   */
  className?: string
  /**
   * The style of the icon.
   * @default {}
   */
  sx?: React.CSSProperties
}

export type CustomizationsFunction = (styles: Partial<VsCodeStyles>) => Components<Theme>
