// @ts-types="npm:@types/express@4.17.15"
import { Request, Response } from 'express'
import { getConfigurationEditor } from '@jt/view-exports-svg/utilities/vscode/config.js'
// @ts-types="@jt/view-exports-svg/enum/ViewExportsSVG.d.ts"
import { SVGPostMessage } from '@jt/view-exports-svg/enum/ViewExportsSVG.js'

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
}
