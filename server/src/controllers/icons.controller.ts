// @ts-types="npm:@types/express@4.17.15"
import { Request, Response } from 'express'
import { workspace } from 'vscode'

import { getCacheManager } from '@jt/view-exports-svg/controllers/cache/CacheManagerController.js'
import { SVGPostMessage } from '@jt/view-exports-svg/enum/ViewExportsSVG.js'
import { isEmpty } from '@jt/view-exports-svg/utilities/misc.js'

interface IconParamsRequest {
  type: 'recent' | 'favorite'
}

export class IconsController {
  public addIcon = (req: Request<IconParamsRequest>, res: Response) => {
    if (isEmpty(workspace.workspaceFolders)) return

    const { cache } = this.getCachedIcons(req.params)
    cache.add(workspace.workspaceFolders?.[0].uri, [req.body.data])

    res.send({ message: 'Icon added' })
  }

  /**
   * Removes an icon from the cache.
   *
   * @param req - The request object containing the parameters for the icon request.
   * @param res - The response object used to send back the icons data.
   *
   * @returns A response with the updated icons data.
   */
  public removeIcon = (req: Request<IconParamsRequest>, res: Response) => {
    if (isEmpty(workspace.workspaceFolders)) return

    const { cache, type } = this.getCachedIcons(req.params)
    const icons = cache.remove(workspace.workspaceFolders?.[0].uri, req.body.data)

    res.send({ type, data: icons })
  }

  /**
   * Handles the request to get icons.
   *
   * @param req - The request object containing the parameters for the icon request.
   * @param res - The response object used to send back the icons data.
   *
   * @returns A response with the requested icons data.
   */
  public getIcons = (req: Request<IconParamsRequest>, res: Response) => {
    if (isEmpty(workspace.workspaceFolders)) return

    const { cache, type } = this.getCachedIcons(req.params)
    const icons = cache.getIcons(workspace.workspaceFolders?.[0].uri)

    res.send({ type, data: icons })
  }

  /**
   * Clears the cached icons based on the provided request parameters.
   *
   * @param req - The request object containing the parameters to identify the cache.
   * @param res - The response object used to send the result back to the client.
   *
   * @returns A response with the type of icons cleared and an empty data array.
   */
  public clearIcons = (req: Request<IconParamsRequest>, res: Response) => {
    const { cache, type } = this.getCachedIcons(req.params)
    cache.clear()

    res.send({ type, data: [] })
  }

  /**
   * Retrieves the cached icons based on the provided parameters.
   *
   * @param params - The parameters to determine which cache to retrieve.
   * @returns An object containing the cache and the type of icons.
   */
  private getCachedIcons = (params: IconParamsRequest) => {
    const { RecentIconCache, FavoritesIconCache } = getCacheManager()

    const type = params.type === 'recent'

    return {
      cache: type ? RecentIconCache : FavoritesIconCache,
      type: type ? SVGPostMessage.SendRecentIcons : SVGPostMessage.SendFavoriteIcons,
    }
  }
}
