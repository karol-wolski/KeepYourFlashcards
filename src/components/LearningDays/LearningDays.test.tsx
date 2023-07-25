import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import LearningDays from './LearningDays'

describe('Learning days component', () => {
  it('render properly', () => {
    const component = render(<LearningDays numOfDays={20} />)
    expect(component.getByText(/Learning days in a row/i)).toBeInTheDocument()
    expect(component.getByText('20')).toBeInTheDocument()
  })
})
