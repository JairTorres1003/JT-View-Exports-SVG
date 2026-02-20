import type { SVGFile } from '@jt-view-exports-svg/core'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, test, vi } from 'vitest'

import { OpenFileButton } from '@/core/components/Buttons/OpenFileButton'
import { openFileInPosition } from '@/core/utils/file'

describe('OpenFileButton', () => {
  const mockFile: SVGFile = {
    uri: 'file:///path/to/file.tsx',
    absolutePath: '/path/to/file.tsx',
    relativePath: 'file.tsx',
    basename: 'file.tsx',
    dirname: '/path/to',
    extension: 'tsx',
    isTemporary: false,
    language: 'typescriptreact',
  }

  test('should render correctly for a single file', async () => {
    render(<OpenFileButton file={mockFile} data-testid='open-file-button' />)

    const button = screen.getByTestId('open-file-button')
    expect(button).toBeDefined()

    expect(screen.getByTestId('icon-go-to-file')).toBeDefined()
    expect(screen.queryByTestId('icon-go-to-many-files')).toBeNull()

    await userEvent.hover(button)
    const tooltip = await screen.findByRole('tooltip')
    expect(tooltip).toBeDefined()
    expect(tooltip.textContent).toBe('Open file')
  })

  test('should render correctly for multiple files', async () => {
    render(<OpenFileButton file={mockFile} multiple data-testid='open-many-files-button' />)

    const button = screen.getByTestId('open-many-files-button')
    expect(button).toBeDefined()

    expect(screen.getByTestId('icon-go-to-many-files')).toBeDefined()
    expect(screen.queryByTestId('icon-go-to-file')).toBeNull()

    await userEvent.hover(button)
    const tooltip = await screen.findByRole('tooltip')
    expect(tooltip).toBeDefined()
    expect(tooltip.textContent).toBe('Open many files')
  })

  test('should call openFileInPosition and onClick when single file button is clicked', async () => {
    const handleClick = vi.fn()
    render(<OpenFileButton file={mockFile} onClick={handleClick} data-testid='open-file-button' />)

    const button = screen.getByTestId('open-file-button')
    await userEvent.click(button)

    expect(openFileInPosition).toHaveBeenCalledWith(mockFile)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('should only call onClick when multiple files button is clicked', async () => {
    const consoleSpy = vi.spyOn(console, 'info').mockImplementation(() => null)

    const handleClick = () => {
      console.info('Button clicked')
    }
    render(
      <OpenFileButton
        file={mockFile}
        multiple
        onClick={handleClick}
        data-testid='open-many-files-button'
      />
    )

    const button = screen.getByTestId('open-many-files-button')
    await userEvent.click(button)

    expect(consoleSpy).toHaveBeenCalledWith('Button clicked')
    expect(consoleSpy).toHaveBeenCalledTimes(1)

    consoleSpy.mockRestore()
  })

  test('should pass extra props to IconButton', () => {
    render(
      <OpenFileButton
        file={mockFile}
        data-testid='open-file-button'
        className='extra-class'
        disabled
      />
    )

    const button = screen.getByTestId('open-file-button')
    expect(button).toHaveClass('extra-class')
    expect(button).toBeDisabled()
  })
})
