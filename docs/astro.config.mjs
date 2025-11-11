// @ts-check
import starlight from '@astrojs/starlight'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import starlightChangelogs, { makeChangelogsSidebarLinks } from 'starlight-changelogs'
import starlightImageZoom from 'starlight-image-zoom'
import starlightThemeNova from 'starlight-theme-nova'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightImageZoom(), starlightThemeNova(), starlightChangelogs()],
      favicon: 'favicon.ico',
      logo: {
        src: './src/assets/JT View Exports SVG - ICON.svg',
        alt: 'View Exports SVG Logo',
      },
      title: 'View Exports SVG',
      description:
        '🚀 The ultimate tool to explore and manage SVG components directly in Visual Studio Code.',
      editLink: {
        baseUrl: 'https://github.com/JairTorres1003/JT-View-Exports-SVG/edit/main/docs',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/JairTorres1003/JT-View-Exports-SVG',
        },
      ],
      sidebar: [
        { label: 'Home', link: '/' },
        { label: 'Getting Started', link: '/getting-started' },
        { label: 'Features', link: '/features' },
        {
          label: 'Guides',
          items: [
            { label: 'Usage', link: '/guides/usage' },
            { label: 'DevTools Panel', link: '/guides/devtools' },
            { label: 'Settings', link: '/guides/settings' },
            { label: 'SVG Support', link: '/guides/svg-support' },
            { label: 'Troubleshooting', link: '/guides/troubleshooting' },
            { label: 'FAQ', link: '/guides/faq' },
          ],
        },
        {
          label: 'Changelog',
          items: [
            ...makeChangelogsSidebarLinks([
              {
                type: 'latest',
                base: 'changelog',
                label: 'Latest version',
              },
              {
                type: 'all',
                base: 'changelog',
                label: 'Version history',
              },
            ]),
          ],
        },
      ],
      customCss: ['./src/styles/global.css'],
    }),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
