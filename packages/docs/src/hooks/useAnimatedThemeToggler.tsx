import { useColorMode } from '@docusaurus/theme-common'
import { useCallback } from 'react'
import { flushSync } from 'react-dom'

export const useAnimatedThemeToggler = () => {
  const { colorMode, setColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  /**
   * Toggles the application theme between light and dark modes with smooth view transition animation.
   *
   * The theme change must happen *inside* the `startViewTransition` callback, otherwise the browser
   * captures the "new" snapshot before the theme is applied and no animation is visible.
   *
   * @returns A promise that resolves when the theme transition is complete
   */
  const toggleTheme = useCallback(async () => {
    const applyTheme = () =>
      flushSync(() => {
        setColorMode(isDark ? 'light' : 'dark')
        document.documentElement.classList.toggle('dark')
      })

    if (!document.startViewTransition) {
      applyTheme()
      return
    }

    await document.startViewTransition(applyTheme).finished
  }, [isDark, setColorMode])

  return { isDark, toggleTheme }
}
