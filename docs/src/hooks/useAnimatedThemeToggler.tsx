import { useTheme } from '@heroui/use-theme'
import { useCallback, useEffect, useState } from 'react'
import { flushSync } from 'react-dom'

export const useAnimatedThemeToggler = () => {
  const [isDark, setIsDark] = useState(false)
  const { setTheme } = useTheme()

  useEffect(() => {
    const updateTheme = () => {
      const dataThemeIsDark = document.documentElement.getAttribute('data-theme') === 'dark'
      const classContainsDark = document.documentElement.classList.contains('dark')
      const actualIsDark = dataThemeIsDark || classContainsDark
      setIsDark(actualIsDark)
    }

    updateTheme()

    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  /**
   * Toggles the application theme between light and dark modes with smooth view transition animation.
   *
   * Uses the View Transitions API when available for a smooth visual transition between themes.
   * Falls back to immediate theme change if View Transitions API is not supported.
   *
   * Updates the following:
   * - React state (`isDark` and theme)
   * - DOM class on the document root element
   * - localStorage with the new theme preference
   *
   * @returns A promise that resolves when the theme transition is complete
   */
  const toggleTheme = useCallback(async () => {
    if (!document.startViewTransition) {
      setTheme(isDark ? 'light' : 'dark')
      return
    }

    await document.startViewTransition(() => {
      flushSync(() => {
        const newTheme = !isDark
        setIsDark(newTheme)
        setTheme(newTheme ? 'dark' : 'light')
        document.documentElement.classList.toggle('dark')
        localStorage.setItem('theme', newTheme ? 'dark' : 'light')
      })
    }).ready
  }, [isDark])

  return { isDark, toggleTheme }
}
