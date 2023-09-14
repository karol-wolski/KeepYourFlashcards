import { describe, expect, it, beforeEach, vi } from 'vitest'
import { render, RenderResult, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import EditUserForm from './EditUserForm'

let form: RenderResult

describe('Edit User Form', () => {
  const mockFn = vi.fn()
  const validUsername = 'username'
  const validEmail = 'a@a.pl'

  const defaultData = {
    username: 'John',
    email: 'john@doe.com',
  }

  beforeEach(() => {
    form = render(
      <EditUserForm
        onSubmit={mockFn}
        isLoading={false}
        error=""
        defaultData={defaultData}
      />
    )
  })

  it('render form properly', () => {
    expect(form.getByLabelText(/username/i)).toBeInTheDocument()
    expect(form.getByRole('textbox', { name: /username/i })).toBeInTheDocument()
    expect(form.getByRole('textbox', { name: /username/i })).toHaveValue(
      defaultData.username
    )
    expect(form.getByLabelText(/email/i)).toBeInTheDocument()
    expect(form.getByRole('textbox', { name: /email/i })).toBeInTheDocument()
    expect(form.getByRole('textbox', { name: /email/i })).toHaveValue(
      defaultData.email
    )
    expect(form.getByText(/save/i)).toBeInTheDocument()
    expect(form.getByRole('button', { name: /save/i })).toBeInTheDocument()
  })

  it('should display an error message for a username less than 6 characters long', async () => {
    const wrongUsername = 'a'

    const username = form.getByLabelText(/username/i)
    fireEvent.change(username, { target: { value: wrongUsername } })

    const email = form.getByLabelText(/email/i)
    fireEvent.change(email, { target: { value: validEmail } })

    const btn = form.getByRole('button', { name: /save/i })
    await userEvent.click(btn)

    expect(
      form.getByText('Username should have at least 6 chars.')
    ).toBeInTheDocument()
  })

  it('should display an error message for a username longer than 30 characters', async () => {
    const wrongUsername = 'UserName1UserName1UserName1UserName1'

    const username = form.getByLabelText(/username/i)
    fireEvent.change(username, { target: { value: wrongUsername } })

    const email = form.getByLabelText(/email/i)
    fireEvent.change(email, { target: { value: validEmail } })

    const btn = form.getByRole('button', { name: /save/i })
    await userEvent.click(btn)

    expect(
      form.getByText('Username should have less than 30 chars.')
    ).toBeInTheDocument()
  })

  it('should display an error message for an email less than 3 characters long', async () => {
    const wrongEmail = 'a@a'

    const username = form.getByLabelText(/username/i)
    fireEvent.change(username, { target: { value: validUsername } })

    const email = form.getByLabelText(/email/i)
    fireEvent.change(email, { target: { value: wrongEmail } })

    const btn = form.getByRole('button', { name: /save/i })
    await userEvent.click(btn)

    expect(
      form.getByText('Email should have at least 4 chars.')
    ).toBeInTheDocument()
  })

  it('should display an error message for the wrong email format', async () => {
    const wrongEmail = 'a@aa'
    const username = form.getByLabelText(/username/i)
    fireEvent.change(username, { target: { value: validUsername } })

    const email = form.getByLabelText(/email/i)
    fireEvent.change(email, { target: { value: wrongEmail } })

    const btn = form.getByRole('button', { name: /save/i })
    await userEvent.click(btn)

    expect(
      form.getByText('The email address is in the wrong format.')
    ).toBeInTheDocument()
  })

  it('should send data', async () => {
    const username = form.getByLabelText(/username/i)
    fireEvent.change(username, { target: { value: validUsername } })

    const email = form.getByLabelText(/email/i)
    fireEvent.change(email, { target: { value: validEmail } })

    const btn = form.getByRole('button', { name: /save/i })
    await userEvent.click(btn)

    expect(mockFn).toBeCalledTimes(1)
  })
})
