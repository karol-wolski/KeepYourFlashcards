import { describe, expect, it, beforeEach, vi } from 'vitest'
import { render, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RepeatMode from './RepeatMode'

let repeatMode: RenderResult

const data = {
  collectionName: 'English phrases',
  card: {
    id: '2',
    question: 'What it the most popular sport in Poland?',
    answer: 'Football',
  },
}

describe('Repeat modw component', () => {
  const mockFn = vi.fn()

  beforeEach(() => {
    repeatMode = render(
      <RepeatMode
        collectionName={data.collectionName}
        card={data.card}
        handleResult={mockFn}
        isLastCard={false}
        langFront="pl"
        langBack="en"
      />
    )
  })

  afterEach(() => {
    vi.clearAllMocks()
    vi.resetAllMocks()
  })

  it('render form properly', () => {
    expect(
      repeatMode.getByText('English phrases - Repeat mode')
    ).toBeInTheDocument()
    expect(repeatMode.getByText(data.card.question)).toBeInTheDocument()
    expect(repeatMode.getByTestId('editableDiv')).toBeInTheDocument()
    expect(
      repeatMode.getByRole('button', { name: 'Check your answer' })
    ).toBeInTheDocument()
  })

  it('should be able set text in aditable div', async () => {
    const editableDiv = repeatMode.getByTestId('editableDiv')
    await userEvent.click(editableDiv)
    await userEvent.keyboard('abc')
    expect(editableDiv.textContent).toBe('abc')
  })

  it('should be able check the answer after the click in button', async () => {
    const editableDiv = repeatMode.getByTestId('editableDiv')
    await userEvent.click(editableDiv)
    await userEvent.keyboard('abc')

    const btn = repeatMode.getByRole('button', { name: 'Check your answer' })
    await userEvent.click(btn)

    expect(repeatMode.getByText(data.card.answer)).toBeInTheDocument()
    expect(repeatMode.getByText('abc')).toBeInTheDocument()
  })

  it('should show Poor and Great buttons after the click in Check your answer button', async () => {
    const btn = repeatMode.getByRole('button', { name: 'Check your answer' })
    await userEvent.click(btn)

    expect(
      repeatMode.getByRole('button', { name: 'Great' })
    ).toBeInTheDocument()

    expect(repeatMode.getByRole('button', { name: 'Poor' })).toBeInTheDocument()
  })

  it('should called mock fn after click in poor button', async () => {
    const btn = repeatMode.getByRole('button', { name: 'Check your answer' })
    await userEvent.click(btn)

    const btnPoor = repeatMode.getByRole('button', { name: 'Poor' })
    await userEvent.click(btnPoor)
    expect(mockFn).toBeCalledTimes(1)
  })

  it('should called mock fn after click in Great button', async () => {
    const btn = repeatMode.getByRole('button', { name: 'Check your answer' })
    await userEvent.click(btn)

    const btnGreat = repeatMode.getByRole('button', { name: 'Great' })
    await userEvent.click(btnGreat)
    expect(mockFn).toBeCalledTimes(1)
  })
})
