import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import TileWithIconLink from './TileWithIconLink'

describe('TileWithIconLink component', () => {
  it('render properly variant primary', () => {
    const component = render(
      <TileWithIconLink
        title="Title"
        href="/"
        iconClass="fa-solid fa-book-open"
        variant="primary"
      />,
      { wrapper: BrowserRouter }
    )
    expect(component.getByText('Title')).toBeInTheDocument()
    const link = component.getByRole('link')
    expect(link).toHaveAttribute('href', '/')
    expect(link).toHaveClass('bg-primary hover:bg-primaryHover')

    expect(
      component.container.querySelector('.fa-book-open')
    ).toBeInTheDocument()
  })

  it('render properly variant secondary', () => {
    const component = render(
      <TileWithIconLink
        title="Title"
        href="/"
        iconClass="fa-solid fa-book-open"
        variant="secondary"
      />,
      { wrapper: BrowserRouter }
    )
    expect(component.getByText('Title')).toBeInTheDocument()
    const link = component.getByRole('link')
    expect(link).toHaveAttribute('href', '/')
    expect(link).toHaveClass('bg-secondary hover:bg-secondaryHover')

    expect(
      component.container.querySelector('.fa-book-open')
    ).toBeInTheDocument()
  })
})
