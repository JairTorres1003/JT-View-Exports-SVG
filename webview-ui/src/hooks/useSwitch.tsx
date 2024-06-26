import { useState } from 'react'

interface SwitchDarkModeHook {
  checkedMode: boolean
  onChangeMode: () => void
}

/**
 * Custom hook for managing dark mode switch state.
 * @param props - The hook props.
 * @param props.keyMode - The key used to store the dark mode state in local storage.
 * @returns An object containing the current dark mode state and a function to toggle the dark mode state.
 */
export const useSwitchDarkMode = (props: { keyMode: string }): SwitchDarkModeHook => {
  const initialDarkMode = localStorage.getItem(props.keyMode) === 'true'

  const [checkedMode, setCheckedMode] = useState<boolean>(initialDarkMode)

  /**
   * Handles the change of the switch mode.
   */
  const onChangeMode = (): void => {
    setCheckedMode(!checkedMode)
    localStorage.setItem(props.keyMode, `${!checkedMode}`)
  }

  return { checkedMode, onChangeMode }
}
