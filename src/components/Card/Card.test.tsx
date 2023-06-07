import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import Card from './Card'

const mockData = {
  id: '0001',
  front: 'This is the question.',
  back: 'This is an answer.',
}

describe('Single Set', () => {
  it('render component properly with front side', () => {
    const el = render(<Card side="FRONT" text={mockData.front} />)
    expect(el.getByText('This is the question.')).toBeInTheDocument()
    expect(el.getByText(/Front/i)).toBeInTheDocument()
  })

  it('render component properly with back side', () => {
    const el = render(<Card side="BACK" text={mockData.back} />)
    expect(el.getByText('This is an answer.')).toBeInTheDocument()
    expect(el.getByText(/Back/i)).toBeInTheDocument()
  })
})
