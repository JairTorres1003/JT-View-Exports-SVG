import { SVGPostMessage, SVGReceiveMessage } from '@api/enums/ViewExportsSVG'
import type { ViewExportSVG } from '@api/types/ViewExportsSVG'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import useDebounce from '@/core/hooks/useDebounce'
import { vscode } from '@/services/vscode'
import { setComponents, setErrors, setSearch } from '@/store/features/SVGSlice'

interface SearchBarHook {
  search: string
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleClear: VoidFunction
}

export const useSearchBar = (): SearchBarHook => {
  const { search } = useSelector((state) => state.svg)
  const debouncedSearch = useDebounce(search, 500)
  const dispatch = useDispatch()

  /**
   * Handles the search input.
   *
   * @param e - The input event.
   */
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearch(e.target.value.trim()))
  }

  /**
   * Clears the search input.
   */
  const handleClear = (): void => {
    if (search !== '') {
      dispatch(setSearch(''))
    }
  }

  /**
   * Retrieves SVG components from the provided data and dispatches an action to set the components.
   *
   * @param data - An array of ViewExportSVG objects containing SVG data.
   */
  const getSVGComponents = (data: ViewExportSVG[]): void => {
    dispatch(setComponents(data))
    dispatch(setErrors())
  }

  useEffect(() => {
    vscode.postMessage(SVGReceiveMessage.SearchSVGComponents, debouncedSearch)
    vscode.onMessage(SVGPostMessage.SendSVGFilteredComponents, getSVGComponents)

    return () => {
      vscode.unregisterMessage(SVGPostMessage.SendSVGFilteredComponents)
    }
  }, [debouncedSearch])

  return { search, handleSearch, handleClear }
}
