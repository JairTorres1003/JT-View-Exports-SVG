import { SVGPostMessage, SVGReceiveMessage, type ViewExportSVG } from '@jt-view-exports-svg/core'
import { useEffect, useRef } from 'react'

import useDebounce from '@/core/hooks/useDebounce'
import { vscode } from '@/services/vscode'
import { setComponents, setErrors, setSearch } from '@/store/features/svg/slice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'

interface SearchBarHook {
  search: string
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleClear: VoidFunction
}

export const useSearchBar = (): SearchBarHook => {
  const { search } = useAppSelector((state) => state.svg)
  const debouncedSearch = useDebounce(search, 500)
  const dispatch = useAppDispatch()

  const mountedRef = useRef(false)

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
    if (!mountedRef.current) return

    vscode.postMessage(SVGReceiveMessage.SearchComponents, debouncedSearch)
    vscode.onMessage(SVGPostMessage.FilterComponents, getSVGComponents)

    return () => {
      vscode.unregisterMessage(SVGPostMessage.FilterComponents)
    }
  }, [debouncedSearch])

  useEffect(() => {
    mountedRef.current = true

    return () => {
      mountedRef.current = false
    }
  }, [])

  return { search, handleSearch, handleClear }
}
