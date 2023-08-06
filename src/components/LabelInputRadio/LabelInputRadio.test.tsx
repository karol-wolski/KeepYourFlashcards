import { describe, expect, it, beforeEach, vi } from 'vitest'
import { render, RenderResult, fireEvent } from '@testing-library/react'
import LabelInputRadio from './LabelInputRadio'

let inputRadio: RenderResult

describe('Label Input Radio component', () => {
  const mockFn = vi.fn()

  const data = {
    id: '001',
    text: 'hello',
  }

  beforeEach(() => {
    inputRadio = render(
      <LabelInputRadio
        key={data.text}
        id={data.id}
        value={data.text}
        register={mockFn}
        registerKey={data.id}
        validationSchema={{ required: 'Mark correct answer' }}
      />
    )
  })

  it('render form properly', () => {
    expect(inputRadio.getByLabelText(/hello/i)).toBeInTheDocument()
    expect(inputRadio.getByLabelText(/hello/i)).toHaveAttribute('id', data.id)
    expect(inputRadio.getByLabelText(/hello/i)).toHaveAttribute(
      'value',
      data.text
    )
    expect(inputRadio.getByLabelText(/hello/i)).not.toBeChecked()
    expect(inputRadio.getByLabelText(/hello/i).parentElement).toHaveAttribute(
      'for',
      data.id
    )
  })

  it('should be checked', () => {
    expect(inputRadio.getByLabelText(/hello/i)).not.toBeChecked()
    fireEvent.click(inputRadio.getByLabelText(/hello/i))
    expect(inputRadio.getByLabelText(/hello/i)).toBeChecked()
  })
})
