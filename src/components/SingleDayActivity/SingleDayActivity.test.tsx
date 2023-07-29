import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import SingleDayActivity from './SingleDayActivity'

describe('SingleDayActivity component', () => {
  it('render properly for data with status 0', () => {
    const { container, getByText } = render(
      <SingleDayActivity day={24} dayName="Mon" status={0} />
    )
    expect(getByText('24')).toBeInTheDocument()
    expect(getByText(/Mon/i)).toBeInTheDocument()
    const icon = container.querySelector('.fa-check-double')
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveClass('text-accent')
  })

  it('render properly for data with status 1', () => {
    const { container, getByText } = render(
      <SingleDayActivity day={24} dayName="Mon" status={1} />
    )
    expect(getByText('24')).toBeInTheDocument()
    expect(getByText(/Mon/i)).toBeInTheDocument()
    const icon = container.querySelector('.fa-check')
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveClass('text-secondary')
  })

  it('render properly for data with status 2', () => {
    const { container, getByText } = render(
      <SingleDayActivity day={24} dayName="Mon" status={2} />
    )
    expect(getByText('24')).toBeInTheDocument()
    expect(getByText(/Mon/i)).toBeInTheDocument()
    const icon = container.querySelector('.fa-check-double')
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveClass('text-secondary')
  })
})
