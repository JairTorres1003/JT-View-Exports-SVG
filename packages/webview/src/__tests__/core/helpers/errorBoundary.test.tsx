import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import { ErrorBoundary } from '@/core/helpers'

describe('ErrorBoundary', () => {
  test('should render children when there is no error', () => {
    render(
      <ErrorBoundary fallback={<p>Fallback UI</p>}>
        <div>Child content</div>
      </ErrorBoundary>
    )

    expect(screen.getByText('Child content')).toBeDefined()
    expect(screen.queryByText('Fallback UI')).toBeNull()
  })

  test('should render fallback UI and not children when an error is thrown', () => {
    const ThrowErrorComponent = (): null => {
      throw new Error('This is a test error')
    }

    render(
      <ErrorBoundary fallback={<p>Fallback UI</p>}>
        <div>Child that should not be rendered</div>
        <ThrowErrorComponent />
      </ErrorBoundary>
    )

    expect(screen.getByText('Fallback UI')).toBeDefined()
    expect(screen.queryByText('Child that should not be rendered')).toBeNull()
  })

  test('should log the error to the console when an error is caught', () => {
    const testError = new Error('This is a test error')
    const ThrowErrorComponent = (): null => {
      throw testError
    }

    render(
      <ErrorBoundary fallback={<p>Fallback UI</p>}>
        <ThrowErrorComponent />
      </ErrorBoundary>
    )

    expect(console.error).toHaveBeenCalledWith(
      'ErrorBoundary caught an error:',
      testError,
      expect.any(Object)
    )
  })
})
