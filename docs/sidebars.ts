import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  main: [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: false,
      items: ['intro/overview', 'intro/why-view-exports-svg', 'intro/why-use-it'],
    },
    {
      type: 'category',
      label: 'Getting Started',
      link: { type: 'doc', id: 'getting-started/index' },
      items: ['getting-started/installation', 'getting-started/your-first-svg'],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/usage',
        'guides/devtools',
        'guides/settings',
        'guides/troubleshooting',
        'guides/faq',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: ['resources/features', 'resources/svg-support'],
    },
  ],
}

export default sidebars
