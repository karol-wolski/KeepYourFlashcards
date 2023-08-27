import { describe, expect, it, beforeEach, vi } from 'vitest'
import { render, RenderResult, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ForgotPasswordForm from './ForgotPasswordForm'

let form: RenderResult

describe('Register Form', () => {
  const mockFn = vi.fn()
  const validEmail = 'a@a.pl'

  beforeEach(() => {
    form = render(
      <ForgotPasswordForm onSubmit={mockFn} isLoading={false} error="" />
    )
  })

  it('render form properly', () => {
    expect(form.getByLabelText(/email/i)).toBeInTheDocument()
    expect(form.getByRole('textbox', { name: /email/i })).toBeInTheDocument()
    expect(form.getByText(/submit/i)).toBeInTheDocument()
    expect(form.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('should display an error message for an email less than 3 characters long', async () => {
    const wrongEmail = 'a@a'

    const email = form.getByLabelText(/email/i)
    fireEvent.change(email, { target: { value: wrongEmail } })

    const btn = form.getByRole('button', { name: /submit/i })
    await userEvent.click(btn)

    expect(
      form.getByText('Email should have at least 4 chars.')
    ).toBeInTheDocument()
  })

  it('should display an error message for the wrong email format', async () => {
    const wrongEmail = 'a@aa'

    const email = form.getByLabelText(/email/i)
    fireEvent.change(email, { target: { value: wrongEmail } })

    const btn = form.getByRole('button', { name: /submit/i })
    await userEvent.click(btn)

    expect(
      form.getByText('The email address is in the wrong format.')
    ).toBeInTheDocument()
  })

  it('should send data', async () => {
    const email = form.getByLabelText(/email/i)
    fireEvent.change(email, { target: { value: validEmail } })

    const btn = form.getByRole('button', { name: /submit/i })
    await userEvent.click(btn)

    expect(mockFn).toBeCalledTimes(1)
  })
})
