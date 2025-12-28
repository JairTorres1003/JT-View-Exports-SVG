import {
  Blocks,
  ClipboardCopy,
  Component,
  DatabaseZap,
  FileSignal,
  FolderSearch,
  ImageDown,
  Palette,
  PencilRuler,
  SquareMenu,
  Star,
  SunMoon,
  Terminal,
} from 'lucide-react'
import CodeInline from '@theme/CodeInline'

export const FeaturesWorkspace = [
  {
    icon: <FolderSearch />,
    title: 'Full Project Detection',
    description: (
      <>
        Detects exported icons across <CodeInline>.tsx</CodeInline>, <CodeInline>.jsx</CodeInline>,{' '}
        <CodeInline>.js</CodeInline>, and <CodeInline>.ts</CodeInline> files — no manual setup
        required.
      </>
    ),
  },
  {
    icon: <FileSignal />,
    title: 'Multi-file Analysis',
    description:
      'Recursively scans all folders and submodules in your workspace, ensuring that every component is indexed.',
  },
  {
    icon: <DatabaseZap />,
    title: 'Smart Caching',
    description:
      'Uses intelligent caching to skip previously scanned files, making repeated scans nearly instant.',
  },
]

export const FeaturesDevtools = [
  {
    icon: <Component />,
    title: 'Component Explorer',
    description:
      'Displays all SVG components with thumbnails, names, and quick actions for copying or exporting.',
  },
  {
    icon: <PencilRuler />,
    title: 'Interactive Playground',
    description:
      'Edit your SVG component props in real time and instantly see the rendered output.',
  },
]

export const FeaturesProductivity = [
  {
    icon: <ClipboardCopy />,
    title: 'Quick Copy',
    description: 'Copy component names or SVG code directly to your clipboard with one click.',
  },
  {
    icon: <ImageDown />,
    title: 'Export Options',
    description: (
      <>
        Download any icon as <CodeInline>.svg</CodeInline> or <CodeInline>.png</CodeInline>{' '}
        instantly.
      </>
    ),
  },
  {
    icon: <SquareMenu />,
    title: 'Context Menu Integration',
    description: "Launch the viewer from the right-click menu in VS Code's Explorer.",
  },
  {
    icon: <Terminal />,
    title: 'Command Palette Support',
    description: (
      <>
        Run <strong>"View Exports SVG: Start Scanning"</strong> from the Command Palette to trigger
        workspace scans.
      </>
    ),
  },
  {
    icon: <Star />,
    title: 'Favorites & Recents',
    description: 'Quickly access your most used or recently opened icons from dedicated sections.',
    className: 'md:translate-x-[50%]',
  },
]

export const FeaturesThemeSupport = [
  {
    icon: <SunMoon />,
    title: 'Light & Dark Modes',
    description:
      'Automatically detects your current VS Code theme and adjusts its UI for consistent readability.',
  },
  {
    icon: <Palette />,
    title: 'Popular Themes',
    description: (
      <>
        Compatible with popular themes like <strong>Dracula</strong>, <strong>One Dark Pro</strong>,
        <strong>Night Owl</strong>, <strong>GitHub Dark</strong>, and more.
      </>
    ),
  },
  {
    icon: <Blocks />,
    title: 'Seamless Integration',
    description: 'Respects editor color tokens and system preferences for a natural, native feel.',
  },
]
