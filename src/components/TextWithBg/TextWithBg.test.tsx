import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import TextWithBg from './TextWithBg'

describe('TextWithBg component', () => {
  it('render properly', () => {
    const { getByText } = render(<TextWithBg text="Test" />)
    expect(getByText('Test')).toBeInTheDocument()
  })
})
