import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import DescWithIcon from './DescWithIcon'

describe('DescWithIcon component', () => {
  it('render properly', () => {
    const { getByText, container } = render(
      <DescWithIcon title="Test" desc="Lorem ipsum" iconClass="fa-clock" />
    )
    expect(getByText('Test')).toBeInTheDocument()
    expect(getByText(/Lorem ipsum/i)).toBeInTheDocument()

    const icon = container.querySelector('.fa-clock')
    expect(icon).toBeInTheDocument()
  })
})
