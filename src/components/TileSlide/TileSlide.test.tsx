import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import TileSlide from './TileSlide'

describe('TileSlide component', () => {
  it('render properly', () => {
    const { getByText, container } = render(
      <TileSlide text="Test" iconClass="fa-clock" isVisible />
    )
    expect(getByText('Test')).toBeInTheDocument()

    const icon = container.querySelector('.fa-clock')
    expect(icon).toBeInTheDocument()
  })

  it('to be inVisible', () => {
    const { getByText, container } = render(
      <TileSlide text="Test" iconClass="fa-clock" isVisible={false} />
    )
    expect(getByText('Test')).toBeInTheDocument()

    const icon = container.querySelector('.fa-clock')
    expect(icon).toBeInTheDocument()

    const slide = container.querySelector('.flex-col')
    expect(slide).toHaveClass('hidden')
  })
})
