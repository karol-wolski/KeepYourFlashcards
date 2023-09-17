import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import JoinUs from './JoinUs'

describe('JoinUs component', () => {
  it('render properly', () => {
    const { getByText, getByRole } = render(<JoinUs />, {
      wrapper: BrowserRouter,
    })

    expect(
      getByRole('heading', {
        level: 2,
        name: 'The No. 1 flashcards platform',
      })
    ).toBeInTheDocument()

    expect(getByText('Join satisfied users')).toBeInTheDocument()

    const link = getByRole('link', { name: 'Join us now' })
    expect(link).toHaveAttribute('href', '/register')
  })
})
