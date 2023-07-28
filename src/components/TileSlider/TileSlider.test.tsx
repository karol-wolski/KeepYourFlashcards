import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TileSlider from './TileSlider'

describe('TileSlider component', () => {
  const slides = [
    {
      id: '1',
      iconClass: 'fa-clock',
      text: '45 mins',
    },
    {
      id: '2',
      iconClass: 'fa-chalkboard',
      text: '100 repetitions',
    },
  ]

  it('render properly', () => {
    const { getByText, getByLabelText, container } = render(
      <TileSlider slides={slides} />
    )

    const tile1Title = getByText('45 mins')
    expect(tile1Title).toBeInTheDocument()
    const tile1Icon = container.querySelector('.fa-clock')
    expect(tile1Icon).toBeInTheDocument()
    const tile1 = tile1Title.closest('div')
    expect(tile1).not.toHaveClass('hidden')

    const tile2Title = getByText('100 repetitions')
    expect(tile2Title).toBeInTheDocument()
    const tile2Icon = container.querySelector('.fa-chalkboard')
    expect(tile2Icon).toBeInTheDocument()
    const tile2 = tile2Title.closest('div')
    expect(tile2).toHaveClass('hidden')

    expect(getByLabelText(/Display slide no 1/i)).toBeInTheDocument()
    expect(getByLabelText(/Display slide no 2/i)).toBeInTheDocument()
  })

  it('should change the visible tile after click in button', async () => {
    const { getByText, getByLabelText, container } = render(
      <TileSlider slides={slides} />
    )

    const tile1Title = getByText('45 mins')
    expect(tile1Title).toBeInTheDocument()
    const tile1Icon = container.querySelector('.fa-clock')
    expect(tile1Icon).toBeInTheDocument()
    const tile1 = tile1Title.closest('div')
    expect(tile1).not.toHaveClass('hidden')

    const tile2Title = getByText('100 repetitions')
    expect(tile2Title).toBeInTheDocument()
    const tile2Icon = container.querySelector('.fa-chalkboard')
    expect(tile2Icon).toBeInTheDocument()
    const tile2 = tile2Title.closest('div')
    expect(tile2).toHaveClass('hidden')

    const button1 = getByLabelText(/Display slide no 1/i)
    expect(button1).toBeInTheDocument()
    const button2 = getByLabelText(/Display slide no 2/i)
    expect(button2).toBeInTheDocument()

    await userEvent.click(button2)
    expect(tile1).toHaveClass('hidden')
    expect(tile2).not.toHaveClass('hidden')
  })
})
