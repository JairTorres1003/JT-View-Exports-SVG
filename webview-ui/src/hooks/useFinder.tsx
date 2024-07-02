import { useEffect, useState } from 'react'

import { type FinderProps } from '../interfaces/Finder'
import { vscode } from '../utilities/vscode'

import useDebounce from './useDebounce'

interface FinderHook {
  handleClearValue: () => void
  setValue: React.Dispatch<React.SetStateAction<string>>
  value: string
}

const useFinder = (props: Omit<FinderProps, 'handleHome'>): FinderHook => {
  const [value, setValue] = useState<string>('')
  const debounce = useDebounce(value, 600)

  /**
   * Clear the value and trigger.
   */
  const handleClearValue = (): void => {
    if (value.trim().length > 0) {
      setValue('')
    }
  }

  useEffect(() => {
    // Request the extension
    vscode.postMessage('searchSvgComponents', debounce.toString())

    // Listen for messages
    vscode.onMessage('filteredSvgComponents', props.handleSvgComponents)

    // Cleanup function to remove the message handler when the component unmounts or dependencies change
    return () => {
      vscode.removeMessageHandler('filteredSvgComponents', props.handleSvgComponents)
    }
  }, [debounce])

  return {
    handleClearValue,
    setValue,
    value,
  }
}

export default useFinder
