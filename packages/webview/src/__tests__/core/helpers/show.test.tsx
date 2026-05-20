import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import { Show } from '@/core/helpers'

test('Show component renders children when condition is true', () => {
  render(
    <Show>
      <Show.When condition={true}>
        <div>Visible Content</div>
      </Show.When>
      <Show.Else>
        <div>Hidden Content</div>
      </Show.Else>
    </Show>
  )

  const element = screen.getByText('Visible Content')
  expect(element).toBeDefined()
  expect(element.textContent).toBe('Visible Content')
})

test('Show component renders else content when condition is false', () => {
  render(
    <Show>
      <Show.When condition={false}>
        <div>Visible Content</div>
      </Show.When>
      <Show.Else>
        <div>Hidden Content</div>
      </Show.Else>
    </Show>
  )

  const element = screen.getByText('Hidden Content')
  expect(element).toBeDefined()
  expect(element.textContent).toBe('Hidden Content')

  // Verify the other content is not present
  expect(screen.queryByText('Visible Content')).toBeNull()
})

test('Show component handles multiple When conditions', () => {
  render(
    <Show>
      <Show.When condition={false}>
        <div>First Content</div>
      </Show.When>
      <Show.When condition={true}>
        <div>Second Content</div>
      </Show.When>
      <Show.Else>
        <div>Fallback Content</div>
      </Show.Else>
    </Show>
  )

  expect(screen.getByText('Second Content')).toBeDefined()
  expect(screen.queryByText('First Content')).toBeNull()
  expect(screen.queryByText('Fallback Content')).toBeNull()
})
