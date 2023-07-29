import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import TileLink from './TileLink'

describe('TileLink component', () => {
  it('render properly', () => {
    const component = render(
      <TileLink title="Title" href="/" isIconVisible />,
      { wrapper: BrowserRouter }
    )
    expect(component.getByText('Title')).toBeInTheDocument()
    const link = component.getByRole('link')
    expect(link).toHaveAttribute('href', '/')

    expect(component.getByTitle('Right long arrow')).toBeInTheDocument()
  })

  it('render without icon', () => {
    const component = render(
      <TileLink title="Title" href="/" isIconVisible={false} />,
      { wrapper: BrowserRouter }
    )
    expect(component.getByText('Title')).toBeInTheDocument()
    const link = component.getByRole('link')
    expect(link).toHaveAttribute('href', '/')

    expect(component.queryByTitle('Right long arrow')).not.toBeInTheDocument()
  })
})
