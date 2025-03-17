// @ts-types="npm:@types/express@4.17.15"
import { Request, Response } from 'express'
import { getConfigurationEditor } from '@jt/view-exports-svg/utilities/vscode/config.js'
import { isEmpty } from '@jt/view-exports-svg/utilities/misc.js'
import { getStyles } from '@jt/view-exports-svg/utilities/vscode/theme.js'
import { expandedIcons } from '@jt/view-exports-svg/commands/expandedIcons.js'
// @ts-types="@jt/view-exports-svg/enum/ViewExportsSVG.d.ts"
import { SVGPostMessage } from '@jt/view-exports-svg/enum/ViewExportsSVG.js'
import {
  getExtensionTheme as _getExtensionTheme,
  initializeExtensionTheme,
} from '@jt/view-exports-svg/utilities/vscode/extensions/theme.js'

export class SettingsController {
  /**
   * Handles the request to get the editor configuration.
   *
   * @param _ - The request object (not used).
   * @param res - The response object used to send back the editor configuration.
   *
   * @returns A JSON response with the editor configuration if successful, or an error message if an error occurs.
   */
  public getEditorConfig = (_: Request, res: Response) => {
    try {
      const editorConfig = getConfigurationEditor()

      res.status(200).json({ type: SVGPostMessage.SendEditorConfig, data: editorConfig })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: SVGPostMessage.SendEditorConfig, data: {} })
    }
  }

  /**
   * Handles the request to toggle the expand all icons setting.
   *
   * @param req - The request object containing the new value for the expand all icons setting.
   * @param res - The response object used to send back a success message if the setting was updated.
   *
   * @returns A JSON response with a success message if the setting was updated, or an error message if an error occurs.
   */
  public toggleExpandAll = (req: Request, res: Response) => {
    const isExpanded = req.body.data
    expandedIcons(isExpanded)
      .then(() => {
        res.send({ message: 'Expanded icons updated' })
      })
      .catch((error) => {
        console.error(error)
        res.status(500).send({ message: 'Error updating expanded icons' })
      })
  }

  /**
   * Handles the request to get the extension theme.
   *
   * @param _ - The request object (not used).
   * @param res - The response object used to send back the extension theme.
   *
   * @returns A JSON response with the extension theme if successful, or an error message if an error occurs.
   */
  public getExtensionTheme = (_: Request, res: Response) => {
    try {
      let theme = _getExtensionTheme()

      if (isEmpty(theme)) {
        initializeExtensionTheme()
        theme = _getExtensionTheme()
      }

      res.status(200).json({ type: SVGPostMessage.SendExtensionTheme, data: theme })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: SVGPostMessage.SendExtensionTheme, data: {} })
    }
  }

  /**
   * Handles the request to get the VS Code styles.
   *
   * @param _ - The request object (not used).
   * @param res - The response object used to send back the VS Code styles.
   *
   * @returns A JSON response with the VS Code styles if successful, or an error message if an error occurs.
   */
  public getVscodeStyles = (_: Request, res: Response) => {
    try {
      const config = getStyles()

      res.status(200).json({ type: SVGPostMessage.SendVsCodeStyles, data: config })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: SVGPostMessage.SendVsCodeStyles, data: {} })
    }
  }
}
