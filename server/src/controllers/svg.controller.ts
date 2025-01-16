// @ts-types="npm:@types/express@4.17.15"
import { Request, Response } from 'express'
import * as path from 'path'
// @ts-types="npm:@types/vscode@1.60.0"
import { l10n } from 'vscode'

import { pathToSVGFile } from '@jt/view-exports-svg/utilities/files/misc.js'
import { processFiles } from '@jt/view-exports-svg/utilities/files/processFiles.js'
import { svgFileToUri } from '@jt/view-exports-svg/utilities/vscode/uri.js'
import { SVGPostMessage } from '@jt/view-exports-svg/enum/ViewExportsSVG.js'

import { getFilesFrontDirectory } from '@/utilities/getFilesFrontDirectory.ts'

export class SvgController {
  /**
   * Handles the retrieval of SVG components from the specified directories.
   *
   * This method fetches SVG files from both TypeScript and JavaScript directories,
   * processes them, and sends the resulting data as a response.
   *
   * @param _ - The request object (not used in this method).
   * @param res - The response object used to send the SVG components data.
   *
   * @returns A promise that resolves when the SVG files have been processed and the response has been sent.
   */
  async getComponents(_: Request, res: Response) {
    try {
      const directory = path.join(Deno.env.get('BASE_PATH') ?? Deno.cwd(), '..', 'examples')

      const filesTs = getFilesFrontDirectory(path.join(directory, 'typescript'))
      const filesJs = getFilesFrontDirectory(path.join(directory, 'javascript'))

      const allFiles = await Promise.all(filesTs.concat(filesJs).map(pathToSVGFile))

      const svgFiles = await Promise.all(allFiles.map(svgFileToUri))

      const operation = (data: unknown): void => {
        res.send({ type: SVGPostMessage.SendSVGComponents, data })
      }

      await processFiles(svgFiles, operation)
    } catch (error) {
      res.send({
        type: SVGPostMessage.SendSVGError,
        data: {
          location: {},
          message: l10n.t('No SVG components found...'),
          error,
        },
      })
    }
  }
}
