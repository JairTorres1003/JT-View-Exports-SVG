import { IconCollectionKind, SVGReceiveMessage } from '@jt-view-exports-svg/core'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, test, vi } from 'vitest'

import ClearCollectionAction from '@/core/components/Accordion/AccordionActionsSVG/actions/ClearCollectionAction'

const mockPostMessage = vi.fn()

vi.mock('@/services/vscode', () => ({
  vscode: { postMessage: (...args: unknown[]) => mockPostMessage(...args) },
}))

describe('ClearCollectionAction', () => {
  beforeEach(() => {
    mockPostMessage.mockReset()
  })

  test('should render clear button with tooltip', async () => {
    render(<ClearCollectionAction collectionKind={IconCollectionKind.FAVORITE} />)

    const button = screen.getByRole('button', { name: 'Clear collection' })
    expect(button).toBeDefined()

    await userEvent.hover(button)
    const tooltip = await screen.findByRole('tooltip')
    expect(tooltip.textContent).toBe('Clear collection')
  })

  test('should open confirmation dialog on click', async () => {
    render(<ClearCollectionAction collectionKind={IconCollectionKind.FAVORITE} />)

    const button = screen.getByRole('button', { name: 'Clear collection' })
    await userEvent.click(button)

    expect(screen.getByText('Are you sure you want to clear this collection?')).toBeDefined()
    expect(screen.getByText('Cancel')).toBeDefined()
    expect(screen.getByText('Yes')).toBeDefined()
  })

  test('should send postMessage on confirm', async () => {
    render(<ClearCollectionAction collectionKind={IconCollectionKind.FAVORITE} />)

    await userEvent.click(screen.getByRole('button', { name: 'Clear collection' }))
    await userEvent.click(screen.getByText('Yes'))

    expect(mockPostMessage).toHaveBeenCalledWith(
      SVGReceiveMessage.ClearIconCollection,
      IconCollectionKind.FAVORITE
    )
  })

  test('should close dialog on cancel without sending message', async () => {
    render(<ClearCollectionAction collectionKind={IconCollectionKind.RECENT} />)

    await userEvent.click(screen.getByRole('button', { name: 'Clear collection' }))
    await userEvent.click(screen.getByText('Cancel'))

    expect(mockPostMessage).not.toHaveBeenCalled()
    await waitFor(() => {
      expect(screen.queryByText('Are you sure you want to clear this collection?')).toBeNull()
    })
  })

  test('should close dialog when clicking dialog close button', async () => {
    render(<ClearCollectionAction collectionKind={IconCollectionKind.FAVORITE} />)

    await userEvent.click(screen.getByRole('button', { name: 'Clear collection' }))
    expect(screen.getByText('Are you sure you want to clear this collection?')).toBeDefined()

    const closeButton = screen.getByRole('button', { name: 'Close' })
    await userEvent.click(closeButton)

    expect(mockPostMessage).not.toHaveBeenCalled()
    await waitFor(() => {
      expect(screen.queryByText('Are you sure you want to clear this collection?')).toBeNull()
    })
  })
})
