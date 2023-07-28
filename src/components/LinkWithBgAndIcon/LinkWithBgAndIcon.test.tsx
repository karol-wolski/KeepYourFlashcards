import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import LinkWithBgAndIcon from './LinkWithBgAndIcon'

describe('LinkWithBgAndIcon component', () => {
  it('render properly', () => {
    const { container, getByText, getByRole } = render(
      <LinkWithBgAndIcon
        title="Title"
        href="/"
        iconClass="fa-solid fa-book-open"
      />,
      { wrapper: BrowserRouter }
    )
    expect(getByText('Title')).toBeInTheDocument()
    const link = getByRole('link')
    expect(link).toHaveAttribute('href', '/')
    expect(link).toHaveClass('mb-[1.6rem]')

    expect(container.querySelector('.fa-book-open')).toBeInTheDocument()
  })

  it('render with last item property', () => {
    const { container, getByText, getByRole } = render(
      <LinkWithBgAndIcon
        title="Title"
        href="/"
        iconClass="fa-solid fa-book-open"
        lastItem
      />,
      { wrapper: BrowserRouter }
    )
    expect(getByText('Title')).toBeInTheDocument()
    const link = getByRole('link')
    expect(link).toHaveAttribute('href', '/')
    expect(link).not.toHaveClass('mb-[1.6rem]')

    expect(container.querySelector('.fa-book-open')).toBeInTheDocument()
  })
})
