import type { SVGComponent } from '@api/types/ViewExportsSVG'

const location: SVGComponent['location'] = {
  start: { line: 1, column: 1, index: 1 },
  end: { line: 1, column: 1, index: 1 },
  file: {
    absolutePath: '/path/to/file.tsx',
    relativePath: 'file.tsx',
    basename: 'file.tsx',
    dirname: '/path/to',
    extension: 'tsx',
    isTemporary: false,
    language: 'typescriptreact',
  },
}

export const mockSvgComponents = {
  simple: {
    component: {
      tag: 'svg',
      props: {
        width: 24,
        height: 24,
        className: '',
        style: {},
        viewBox: '0 0 24 24',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      isMotion: false,
      children: [
        {
          props: {
            d: 'M18 12L18.7071 11.2929L19.4142 12L18.7071 12.7071L18 12ZM6 13C5.44771 13 5 12.5523 5 12C5 11.4477 5.44771 11 6 11V13ZM14.7071 7.29289L18.7071 11.2929L17.2929 12.7071L13.2929 8.70711L14.7071 7.29289ZM18.7071 12.7071L14.7071 16.7071L13.2929 15.2929L17.2929 11.2929L18.7071 12.7071ZM18 13H6V11H18V13Z',
            fill: 'currentColor',
          },
          isMotion: false,
          tag: 'path',
          children: [],
        },
      ],
    },
    isAnimated: false,
    params: {
      size: 24,
      color: 'currentColor',
      sx: {},
      className: '',
    },
    hasErrors: false,
    name: 'ArrowAltLright',
    location,
    types: {
      size: { type: 'number', default: 24 },
      color: { type: 'string', default: 'currentColor' },
      sx: { type: 'object', default: {} },
      className: { type: 'string', default: '' },
    },
    withRestProps: false,
    declaration: 'variable',
    isExported: true,
    isFavorite: false,
  },
  nested: {
    component: {
      tag: 'svg',
      props: {
        width: 24,
        height: 24,
        className: '',
        style: {},
        viewBox: '0 0 24 24',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      isMotion: false,
      children: [
        {
          props: {
            d: 'M12 18L18 12L12 6',
            stroke: 'currentColor',
            strokeWidth: '2',
          },
          isMotion: false,
          tag: 'path',
          children: [],
        },
        {
          props: {
            d: 'M6 18L12 12L6 6',
            stroke: 'currentColor',
            strokeWidth: '2',
          },
          isMotion: false,
          tag: 'path',
          children: [],
        },
      ],
    },
    isAnimated: false,
    params: {
      size: 24,
      color: 'currentColor',
      sx: {},
      className: '',
    },
    hasErrors: false,
    name: 'ExpandRightDouble',
    location,
    types: {
      size: { type: 'number', default: 24 },
      color: { type: 'string', default: 'currentColor' },
      sx: { type: 'object', default: {} },
      className: { type: 'string', default: '' },
    },
    withRestProps: false,
    declaration: 'variable',
    isExported: true,
    isFavorite: false,
  },
} as const satisfies Record<string, SVGComponent>
