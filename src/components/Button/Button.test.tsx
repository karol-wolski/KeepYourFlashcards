import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('render component properly', () => {
    const { getByRole } = render(<Button type="button">Button</Button>)
    const button = getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'button')
    expect(button).toHaveTextContent('Button')
  })

  it('render component properly with type = submit', () => {
    const { getByRole } = render(<Button type="submit">Button</Button>)
    const button = getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'submit')
    expect(button).toHaveTextContent('Button')
  })

  it('render component properly with type = reset', () => {
    const { getByRole } = render(<Button type="reset">Button</Button>)
    const button = getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'reset')
    expect(button).toHaveTextContent('Button')
  })

  it('render component properly with variant = primary', () => {
    const { getByRole } = render(
      <Button type="button" variant="primary">
        Button
      </Button>
    )
    const button = getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'button')
    expect(button).toHaveTextContent('Button')
    expect(button).toHaveClass(
      'bg-primary hover:bg-primaryHover text-textPrimary'
    )
  })

  it('render component properly with variant = danger', () => {
    const { getByRole } = render(
      <Button type="button" variant="danger">
        Button
      </Button>
    )
    const button = getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'button')
    expect(button).toHaveTextContent('Button')
    expect(button).toHaveClass(
      'bg-danger hover:bg-dangerHover text-textPrimary'
    )
  })

  it('render component properly with variant = success', () => {
    const { getByRole } = render(
      <Button type="button" variant="success">
        Button
      </Button>
    )
    const button = getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'button')
    expect(button).toHaveTextContent('Button')
    expect(button).toHaveClass(
      'bg-success hover:bg-successHover text-textPrimary'
    )
  })

  it('render component properly with variant = warn', () => {
    const { getByRole } = render(
      <Button type="button" variant="warn">
        Button
      </Button>
    )
    const button = getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'button')
    expect(button).toHaveTextContent('Button')
    expect(button).toHaveClass(
      'bg-secondary hover:bg-secondaryHover text-textSecondary'
    )
  })
})
