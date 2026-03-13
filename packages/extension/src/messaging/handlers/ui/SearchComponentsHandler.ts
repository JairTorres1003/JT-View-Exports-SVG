import { SVGPostMessage, SVGReceiveMessage } from '@jt-view-exports-svg/core'
import { l10n } from 'vscode'

import type { WebviewMessenger } from '@/messaging/WebviewMessenger'
import { filterComponents } from '@/services/filterComponents'
import { viewExportStore } from '@/store/ViewExportStore'
import { getUnknownError } from '@/utilities/misc'

import { BaseHandler } from '../BaseHandler'

export class SearchComponentsHandler extends BaseHandler {
  readonly type = SVGReceiveMessage.SearchComponents

  constructor(private readonly messenger: WebviewMessenger) {
    super()
  }

  /**
   * Searches for components based on a search term.
   *
   * @param searchTerm - The term to search for in component names. Must be at least 3 characters long.
   * @returns An array of components that match the search term, or false if there are errors or no results.
   */
  private searchComponents(searchTerm: string) {
    const components = viewExportStore.getAll()

    if (searchTerm.trim().length === 0) return components

    if (searchTerm.trim().length < 3) {
      throw new Error(l10n.t('Please enter at least 3 characters to search...'))
    }

    const filtered = filterComponents(components, searchTerm)

    viewExportStore.setSearch(searchTerm)
    viewExportStore.setTotalSearchResults(filtered.length)

    if (filtered.length === 0) {
      throw new Error(l10n.t('No results found...'))
    }

    return filtered
  }

  handle(searchTerm: string): void {
    try {
      viewExportStore.clearSearch()
      const result = this.searchComponents(searchTerm)

      this.messenger.postMessage(SVGPostMessage.FilterComponents, result)
    } catch (error) {
      this.messenger.postMessage(SVGPostMessage.OnErrorComponents, {
        location: {},
        message: getUnknownError(error),
      })
    }
  }
}
