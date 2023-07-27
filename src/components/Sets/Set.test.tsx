import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Set from './Set'

describe('Set component', () => {
  it('render properly', () => {
    const { getByText, getByRole } = render(
      <Set title="Title" href="/" numOfItems={30} />,
      { wrapper: BrowserRouter }
    )
    expect(getByText('Title')).toBeInTheDocument()

    const link = getByRole('link')
    expect(link).toHaveAttribute('href', '/')

    expect(getByText('30 cards')).toBeInTheDocument()
  })

  it('render correct form of word card(s) for one card', () => {
    const { getByText, getByRole } = render(
      <Set title="Title" href="/" numOfItems={1} />,
      { wrapper: BrowserRouter }
    )
    expect(getByText('Title')).toBeInTheDocument()

    const link = getByRole('link')
    expect(link).toHaveAttribute('href', '/')

    expect(getByText('1 card')).toBeInTheDocument()
  })

  it('render properly for isActiveLinks property', () => {
    const { container, getByText, getByLabelText } = render(
      <Set title="Title" href="/" numOfItems={1} isActiveLinks />,
      { wrapper: BrowserRouter }
    )
    expect(getByText('Title')).toBeInTheDocument()

    const link = getByLabelText('Title')
    expect(link).toHaveAttribute('href', '/')

    expect(getByText('1 card')).toBeInTheDocument()

    const StudyLink = getByText('Study')
    expect(StudyLink).toBeInTheDocument()
    expect(StudyLink).toHaveAttribute('href', '/study')
    const StudyLinkIcon = container.querySelector('.fa-book-open')
    expect(StudyLinkIcon).toBeInTheDocument()

    const RepeatLink = getByText('Repeat')
    expect(RepeatLink).toBeInTheDocument()
    expect(RepeatLink).toHaveAttribute('href', '/repeat')
    const RepeatLinkIcon = container.querySelector('.fa-chalkboard')
    expect(RepeatLinkIcon).toBeInTheDocument()

    const TestLink = getByText('Test')
    expect(TestLink).toBeInTheDocument()
    expect(TestLink).toHaveAttribute('href', '/test')
    const TestLinkIcon = container.querySelector('.fa-file')
    expect(TestLinkIcon).toBeInTheDocument()
  })
})
