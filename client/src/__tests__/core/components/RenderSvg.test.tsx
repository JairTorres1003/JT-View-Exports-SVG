import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { describe, expect, test } from 'vitest'

import RenderSvg from '../../../core/components/SVG/RenderSvg/RenderSvg'

import { mockSvgComponents } from '@/__tests__/__mocks__/components.mock'
import { store } from '@/store/store'

const renderWithProvider = (ui: React.ReactElement) => {
  return render(<Provider store={store}>{ui}</Provider>)
}

describe('RenderSvg', () => {
  describe('Basic Rendering', () => {
    test('should render a simple SVG component', () => {
      const { container } = renderWithProvider(<RenderSvg {...mockSvgComponents.simple} />)

      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
      expect(svg).toHaveAttribute('width', '24')
      expect(svg).toHaveAttribute('height', '24')
      expect(svg).toHaveAttribute('viewBox', '0 0 24 24')

      const path = container.querySelector('path')
      expect(path).toBeInTheDocument()
      expect(path).toHaveAttribute('fill', 'currentColor')
    })

    test('should apply additional className to the SVG', () => {
      const { container } = renderWithProvider(
        <RenderSvg {...mockSvgComponents.simple} className='test-class' />
      )

      const svg = container.querySelector('svg')
      expect(svg).toHaveAttribute('class', 'test-class')
    })

    test('should render nested SVG components', () => {
      const { container } = renderWithProvider(<RenderSvg {...mockSvgComponents.nested} />)

      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()

      const paths = container.querySelectorAll('path')
      expect(paths.length).toBe(2)
    })
  })

  describe('Error Handling', () => {
    test('should render SVGError when component is empty', () => {
      const MockRenderSvg = RenderSvg as unknown as React.FC
      const { getByTestId } = renderWithProvider(<MockRenderSvg />)

      const errorIcon = getByTestId('svg-error')
      expect(errorIcon).toBeInTheDocument()
    })

    test('should render SVGError when hasErrors is true', () => {
      const { getByTestId } = renderWithProvider(
        <RenderSvg {...mockSvgComponents.simple} hasErrors />
      )

      const errorIcon = getByTestId('svg-error')
      expect(errorIcon).toBeInTheDocument()
    })
  })
})
