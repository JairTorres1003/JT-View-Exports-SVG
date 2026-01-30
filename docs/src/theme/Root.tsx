import { HtmlClassNameProvider } from '@docusaurus/theme-common'
import { useEffect, useState } from 'react'

export default function Root({ children }) {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-theme') || 'light')
  }, [])

  return <HtmlClassNameProvider className={theme}>{children}</HtmlClassNameProvider>
}
