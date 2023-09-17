import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import WelcomeSection from './WelcomeSection'

describe('WelcomeSection component', () => {
  it('should render properly', () => {
    const component = render(<WelcomeSection />, { wrapper: BrowserRouter })
    expect(
      component.getByText(/Experience a new era of learning/i)
    ).toBeInTheDocument()
    expect(
      component.getByText(
        /Keep Your Flashcards is more than flashcards: it is the global learning platform. Join our community./i
      )
    ).toBeInTheDocument()
    const link = component.getByRole('link')
    expect(link).toHaveAttribute('href', '/register')
    expect(link).toHaveTextContent('Sign up now')
  })
})
