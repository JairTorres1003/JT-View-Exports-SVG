// @ts-types="npm:@types/express@4.17.15"
import { Request, Response } from 'express'
import * as path from 'path'
import { l10n } from 'vscode'

import { getCacheManager } from '@jt/view-exports-svg/controllers/cache/CacheManagerController.js'

import { pathToSVGFile } from '@jt/view-exports-svg/utilities/files/misc.js'
import { processFiles } from '@jt/view-exports-svg/utilities/files/processFiles.js'
import { filteredExports } from '@jt/view-exports-svg/utilities/svg/filtered.js'
import { playground } from '@jt/view-exports-svg/utilities/svg/playground.js'
import { svgFileToUri } from '@jt/view-exports-svg/utilities/vscode/uri.js'
import { SVGPostMessage } from '@jt/view-exports-svg/enum/ViewExportsSVG.js'

import { getFilesFrontDirectory } from '@/utilities/getFilesFrontDirectory.ts'
import { getUnknownError } from '@jt/view-exports-svg/utilities/misc.js'
import { SVGFile, ViewExportSVG } from '../types.d.ts'

export class SvgController {
  private viewExportSVG: ViewExportSVG[] = []

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
  public getComponents = async (_: Request, res: Response) => {
    try {
      const directory = path.join(Deno.env.get('SVG_DIRECTORY_EXAMPLE') ?? Deno.cwd())

      const filesTs = getFilesFrontDirectory(path.join(directory, 'typescript')).slice(0, 3)
      const filesJs = getFilesFrontDirectory(path.join(directory, 'javascript')).slice(0, 2)

      const allFiles = await Promise.all([...filesTs, ...filesJs].map(pathToSVGFile))

      const svgFiles = await Promise.all(allFiles.map(svgFileToUri))

      const operation = (data: ViewExportSVG[]): void => {
        this.viewExportSVG = data
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

  /**
   * Handles the search for SVG components based on the provided query.
   *
   * @param req - The request object containing the search query in `req.body.data`.
   * @param res - The response object used to send back the filtered components or an error message.
   *
   * The function filters the SVG components using the `filteredExports` function.
   * If the result is an array, it sends back the filtered components with the type `SVGPostMessage.SendSVGFilteredComponents`.
   * Otherwise, it sends back an error message with the type `SVGPostMessage.SendSVGError`.
   */
  public searchComponents = (req: Request, res: Response) => {
    const query = req.body.data
    const filtered = filteredExports(this.viewExportSVG, query)

    if (Array.isArray(filtered) && filtered.length > 0) {
      res.send({ type: SVGPostMessage.SendSVGFilteredComponents, data: filtered })
    } else {
      res.send({
        type: SVGPostMessage.SendSVGError,
        data: !Array.isArray(filtered)
          ? filtered
          : { message: l10n.t('No SVG components found...'), location: {}, data: filtered },
      })
    }
  }

  /**
   * Handles the playground component generation based on the provided component data.
   *
   * @param req - The request object containing the component data in `req.body.data`.
   * @param res - The response object used to send back the generated playground or an error message.
   *
   * The function generates the playground using the `playground` function.
   * If the result contains a component, it sends back the generated playground with the type `SVGPostMessage.SendSVGPlayground`.
   * Otherwise, it sends back an error message with the type `SVGPostMessage.SendPlaygroundError`.
   */
  public playgroundComponent = (req: Request, res: Response) => {
    const component = req.body.data

    playground(component)
      .then((result) => {
        if ('component' in result) {
          res.send({ type: SVGPostMessage.SendSVGPlayground, data: result })
        } else {
          res.send({ type: SVGPostMessage.SendPlaygroundError, data: result })
        }
      })
      .catch((error) => {
        const errorMessage = l10n.t('Error generating SVG playground {error}', {
          error: getUnknownError(error),
        })
        console.error(errorMessage, error)
        res.send({
          type: SVGPostMessage.SendPlaygroundError,
          data: {
            message: errorMessage,
            location: {},
            error,
          },
        })
      })
  }

  /**
   * Refreshes the SVG components based on the provided request body data.
   *
   * @param req - The request object containing the files to refresh in `req.body.data`.
   * @param res - The response object used to send back the refreshed components or an error message.
   *
   * This method deletes the specified files from the cache and processes them again,
   * sending the refreshed components back in the response.
   */
  public refreshComponents = async (req: Request, res: Response) => {
    try {
      const files = req.body.data as SVGFile[]

      const { ComponentsFileCache, DeclarationFileCache } = getCacheManager()
      const removedFiles = files.map((file) => file.absolutePath)

      ComponentsFileCache.delete(removedFiles)
      DeclarationFileCache.delete(removedFiles)

      const operation = (result: ViewExportSVG[]): void => {
        res.send({ type: SVGPostMessage.SendRefreshSVGComponents, data: result })

        this.viewExportSVG = this.viewExportSVG.map((item) => {
          const newItem = result.find((r) => r.groupKind.id === item.groupKind.id)
          return newItem ?? item
        })
      }

      await processFiles(files.map(svgFileToUri), operation)
    } catch (error) {
      console.error('Error refreshing SVG components:', error)
      res.status(500).send({
        type: SVGPostMessage.SendSVGError,
        data: {
          location: {},
          message: l10n.t('Error refreshing SVG components: {error}', {
            error: getUnknownError(error),
          }),
          error,
        },
      })
    }
  }
}
