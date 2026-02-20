import type {} from '@docusaurus/plugin-ideal-image'
import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import type {} from 'docusaurus-plugin-image-zoom'
import { themes as prismThemes } from 'prism-react-renderer'
import rehypeAdvancedTablePlugin from './src/plugins/rehype/table'
import remarkAdvancedTablePlugin from './src/plugins/remark/table'
import 'dotenv/config'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const copyright = `© ${new Date().getFullYear()} View Exports SVG. Built with ❤️ by <a href="https://github.com/JairTorres1003" class="font-semibold">Jair Torres</a>. All rights reserved.`

const config: Config = {
  title: 'View Exports SVG',
  tagline:
    '🚀 The ultimate tool to explore and manage SVG components directly in Visual Studio Code.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: process.env.SITE_URL,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'JairTorres1003', // Usually your GitHub org/user name.
  projectName: 'JT-View-Exports-SVG', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'algolia-site-verification',
        content: process.env.ALGOLIA_SITE_VERIFICATION ?? '',
      },
    },
  ],

  plugins: [
    './src/plugins/tailwind-config.ts',
    '@docusaurus/plugin-ideal-image',
    'docusaurus-plugin-image-zoom',
    [
      './src/plugins/changelog/index.ts',
      {
        blogTitle: 'View Exports SVG - Changelog',
        // Not useful, but permits to run git commands earlier
        // Otherwise the sitemap plugin will run them in postBuild()
        blogDescription:
          'Stay updated with the latest changes, improvements, and fixes in View Exports SVG through our comprehensive changelog.',
        blogSidebarCount: 'ALL',
        pageBasePath: '/',
        blogSidebarTitle: 'Changelog',
        routeBasePath: '/changelog',
        showReadingTime: false,
        postsPerPage: 20,
        archiveBasePath: null,
        onInlineAuthors: 'warn',
        editUrl: 'https://github.com/JairTorres1003/JT-View-Exports-SVG/edit/main/CHANGELOG.md',
        feedOptions: {
          type: ['json'],
          title: 'View Exports SVG - Changelog',
          description:
            'Stay updated with the latest changes, improvements, and fixes in View Exports SVG through our comprehensive changelog.',
          copyright,
        },
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/JairTorres1003/JT-View-Exports-SVG/edit/main/docs',
          remarkPlugins: [remarkAdvancedTablePlugin],
          rehypePlugins: [rehypeAdvancedTablePlugin],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/screenshots-ui-social-card.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'View Exports SVG',
      logo: {
        alt: 'View Exports SVG Logo',
        src: '/img/logo.svg',
        width: 34,
        height: 34,
        className: 'min-w-8',
      },
      items: [
        {
          type: 'search',
          position: 'right',
        },
        {
          type: 'custom-social',
          position: 'right',
          icon: 'vscode',
          label: 'VS Code Marketplace',
          href: 'https://marketplace.visualstudio.com/items?itemName=JairTorres1003.jt-view-exports-svg',
          id: 'vscode-marketplace',
        },
        {
          type: 'custom-social',
          position: 'right',
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/JairTorres1003/JT-View-Exports-SVG',
          id: 'github',
        },
        {
          type: 'custom-dark-mode-toggle',
          position: 'right',
          placement: 'bottom-end',
          id: 'dark-mode-toggle',
        },
      ],
    },
    docs: {
      sidebar: { hideable: true },
    },
    footer: {
      copyright,
    },
    prism: {
      additionalLanguages: ['bash'],
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
    },
    algolia: {
      appId: process.env.ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: process.env.ALGOLIA_INDEX_NAME,
      contextualSearch: true,
    },
    zoom: {
      selector: '.markdown img:not(.no-zoom)',
      background: {
        light: 'transparent',
        dark: 'transparent',
      },
      config: {
        margin: 24,
        scrollOffset: 0,
      },
    },
  } satisfies Preset.ThemeConfig,
}

export default config
