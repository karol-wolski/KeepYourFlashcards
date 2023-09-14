import { describe, expect, it, beforeEach, vi } from 'vitest'
import { render, RenderResult, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import EditUserPasswordForm from './EditUserPasswordForm'

let form: RenderResult

describe('Register Form', () => {
  const mockFn = vi.fn()
  const validPassword = 'Pa$$w0rd'

  beforeEach(() => {
    form = render(
      <EditUserPasswordForm onSubmit={mockFn} isLoading={false} error="" />
    )
  })

  it('render form properly', () => {
    expect(form.getByLabelText(/Current Password/i)).toBeInTheDocument()
    expect(form.getByLabelText('Password')).toBeInTheDocument()
    expect(form.getByLabelText(/Confirm Password/i)).toBeInTheDocument()
    expect(form.getByText(/submit/i)).toBeInTheDocument()
    expect(form.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('should display an error message for a current password less than 8 characters long', async () => {
    const wrongPassword = 'Pa$$'

    const currentPassword = form.getByLabelText(/Current Password/i)
    fireEvent.change(currentPassword, { target: { value: wrongPassword } })

    const password = form.getByLabelText('Password')
    fireEvent.change(password, { target: { value: validPassword } })

    const confirmPassword = form.getByLabelText(/Confirm Password/i)
    fireEvent.change(confirmPassword, { target: { value: validPassword } })

    const btn = form.getByRole('button', { name: /submit/i })
    await userEvent.click(btn)

    expect(
      form.getByText('Password should have at least 8 chars.')
    ).toBeInTheDocument()
  })

  it('should display an error message for a current password longer than 32 characters', async () => {
    const wrongPassword = 'Pa$$w0rd1Pa$$w0rd1Pa$$w0rd1Pa$$w0rd1'

    const currentPassword = form.getByLabelText(/Current Password/i)
    fireEvent.change(currentPassword, { target: { value: wrongPassword } })

    const password = form.getByLabelText('Password')
    fireEvent.change(password, { target: { value: validPassword } })

    const confirmPassword = form.getByLabelText(/Confirm Password/i)
    fireEvent.change(confirmPassword, { target: { value: validPassword } })

    const btn = form.getByRole('button', { name: /submit/i })
    await userEvent.click(btn)

    expect(
      form.getByText('Password should have less than 32 chars.')
    ).toBeInTheDocument()
  })

  it('should display an error message for a password less than 8 characters long', async () => {
    const wrongPassword = 'Pa$$'

    const currentPassword = form.getByLabelText(/Current Password/i)
    fireEvent.change(currentPassword, { target: { value: validPassword } })

    const password = form.getByLabelText('Password')
    fireEvent.change(password, { target: { value: wrongPassword } })

    const confirmPassword = form.getByLabelText(/Confirm Password/i)
    fireEvent.change(confirmPassword, { target: { value: validPassword } })

    const btn = form.getByRole('button', { name: /submit/i })
    await userEvent.click(btn)

    expect(
      form.getByText('Password should have at least 8 chars.')
    ).toBeInTheDocument()
  })

  it('should display an error message for a password longer than 32 characters', async () => {
    const wrongPassword = 'Pa$$w0rd1Pa$$w0rd1Pa$$w0rd1Pa$$w0rd1'

    const currentPassword = form.getByLabelText(/Current Password/i)
    fireEvent.change(currentPassword, { target: { value: validPassword } })

    const password = form.getByLabelText('Password')
    fireEvent.change(password, { target: { value: wrongPassword } })

    const confirmPassword = form.getByLabelText(/Confirm Password/i)
    fireEvent.change(confirmPassword, { target: { value: validPassword } })

    const btn = form.getByRole('button', { name: /submit/i })
    await userEvent.click(btn)

    expect(
      form.getByText('Password should have less than 32 chars.')
    ).toBeInTheDocument()
  })

  it('should display an error message for a confirm password less than 8 characters long', async () => {
    const wrongPassword = 'Pa$$'

    const currentPassword = form.getByLabelText(/Current Password/i)
    fireEvent.change(currentPassword, { target: { value: validPassword } })

    const password = form.getByLabelText('Password')
    fireEvent.change(password, { target: { value: validPassword } })

    const confirmPassword = form.getByLabelText(/Confirm Password/i)
    fireEvent.change(confirmPassword, { target: { value: wrongPassword } })

    const btn = form.getByRole('button', { name: /submit/i })
    await userEvent.click(btn)

    expect(
      form.getByText('Password should have at least 8 chars.')
    ).toBeInTheDocument()
  })

  it('should display an error message for a confirm password longer than 32 characters', async () => {
    const wrongPassword = 'Pa$$w0rd1Pa$$w0rd1Pa$$w0rd1Pa$$w0rd1'

    const currentPassword = form.getByLabelText(/Current Password/i)
    fireEvent.change(currentPassword, { target: { value: validPassword } })

    const password = form.getByLabelText('Password')
    fireEvent.change(password, { target: { value: validPassword } })

    const confirmPassword = form.getByLabelText(/Confirm Password/i)
    fireEvent.change(confirmPassword, { target: { value: wrongPassword } })

    const btn = form.getByRole('button', { name: /submit/i })
    await userEvent.click(btn)

    expect(
      form.getByText('Password should have less than 32 chars.')
    ).toBeInTheDocument()
  })

  it('should send data', async () => {
    const currentPassword = form.getByLabelText(/Current Password/i)
    fireEvent.change(currentPassword, { target: { value: validPassword } })

    const password = form.getByLabelText('Password')
    fireEvent.change(password, { target: { value: validPassword } })

    const confirmPassword = form.getByLabelText(/Confirm Password/i)
    fireEvent.change(confirmPassword, { target: { value: validPassword } })

    const btn = form.getByRole('button', { name: /submit/i })
    await userEvent.click(btn)

    expect(mockFn).toBeCalledTimes(1)
  })
})
