import {
  Bug,
  LibraryBig,
  MessageCircleQuestion,
  Puzzle,
  Rocket,
  Settings,
  ToolCase,
} from 'lucide-react'

export const NEXT_STEPS = {
  usage: {
    icon: LibraryBig,
    title: 'Usage Guide',
    description: 'Learn how to make the most of View Exports SVG features.',
    link: '/docs/guides/usage',
  },
  devtools: {
    icon: ToolCase,
    title: 'DevTools Panel',
    description: 'Explore the full-featured panel for managing, previewing, and editing icons.',
    link: '/docs/guides/devtools',
  },
  features: {
    icon: Rocket,
    title: 'Features',
    description: 'Explore all the powerful features that View Exports SVG offers.',
    link: '/docs/resources/features',
  },
  'svg-support': {
    icon: Puzzle,
    title: 'SVG Support',
    description: 'Understand which SVG patterns and component structures are supported.',
    link: '/docs/resources/svg-support',
  },
  troubleshooting: {
    icon: Bug,
    title: 'Troubleshooting',
    description: 'Find solutions to common issues and frequent questions.',
    link: '/docs/guides/troubleshooting',
  },
  settings: {
    icon: Settings,
    title: 'Settings',
    description: 'Customize the extension to fit your workflow.',
    link: '/docs/guides/settings',
  },
  faq: {
    icon: MessageCircleQuestion,
    title: 'FAQ',
    description: 'Get answers to frequently asked questions about View Exports SVG.',
    link: '/docs/guides/faq',
  },
}

export type NextStepKey = keyof typeof NEXT_STEPS
