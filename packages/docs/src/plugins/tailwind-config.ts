import type { PluginModule } from '@docusaurus/types'

const tailwindConfigPlugin: PluginModule = () => {
  return {
    name: 'tailwind-plugin',
    configurePostCss(postcssOptions) {
      postcssOptions.plugins.push(require('@tailwindcss/postcss'))
      return postcssOptions
    },
  }
}

export default tailwindConfigPlugin
