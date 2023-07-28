import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import WeeklyActivity from './WeeklyActivity'

describe('WeeklyActivity component', () => {
  const array = [
    {
      day: 24,
      dayName: 'Mon',
      status: 0,
    },
  ]
  it('render properly', () => {
    const { container, getByText } = render(
      <WeeklyActivity activityArray={array} />
    )
    expect(getByText('24')).toBeInTheDocument()
    expect(getByText(/Mon/i)).toBeInTheDocument()
    const icon = container.querySelector('.fa-check-double')
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveClass('text-accent')
    expect(getByText('Login')).toBeInTheDocument()
    expect(getByText('Login & Study')).toBeInTheDocument()
  })
})
