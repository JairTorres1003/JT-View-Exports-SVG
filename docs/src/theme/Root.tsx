import { HtmlClassNameProvider } from '@docusaurus/theme-common'

export default function Root({ children }) {
  const theme = document.documentElement.getAttribute('data-theme') || 'light'

  return <HtmlClassNameProvider className={theme}>{children}</HtmlClassNameProvider>
}
