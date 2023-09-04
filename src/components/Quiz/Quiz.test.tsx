import { describe, expect, it, beforeEach, vi } from 'vitest'
import { render, RenderResult, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Quiz from './Quiz'

let quizComponent: RenderResult

describe('Label Input Radio component', () => {
  const mockFn = vi.fn()

  const data = {
    quiz: [
      {
        _id: '001',
        question: 'What is the capital of Poland?',
        answers: [
          { text: 'Berlin', isCorrect: false },
          { text: 'Madrid', isCorrect: false },
          { text: 'Warsaw', isCorrect: true },
          { text: 'Rome', isCorrect: false },
        ],
      },
      {
        _id: '002',
        question: 'What it the most popular sport in Poland?',
        answers: [
          { text: 'Ski jumping', isCorrect: false },
          { text: 'Valleyball', isCorrect: false },
          { text: 'Formula One', isCorrect: false },
          { text: 'Football', isCorrect: true },
        ],
      },
    ],
    cb: mockFn,
  }

  beforeEach(() => {
    quizComponent = render(
      <Quiz handleResult={data.cb} questions={data.quiz} />
    )
  })

  afterEach(() => {
    vi.clearAllMocks()
    vi.resetAllMocks()
  })

  it('render form properly', () => {
    expect(quizComponent.getByText(data.quiz[0].question)).toBeInTheDocument()
    expect(
      quizComponent.getByLabelText(data.quiz[0].answers[0].text)
    ).toBeInTheDocument()
    expect(
      quizComponent.getByLabelText(data.quiz[0].answers[1].text)
    ).toBeInTheDocument()
    expect(
      quizComponent.getByLabelText(data.quiz[0].answers[2].text)
    ).toBeInTheDocument()
    expect(
      quizComponent.getByLabelText(data.quiz[0].answers[3].text)
    ).toBeInTheDocument()
    expect(quizComponent.getByText(data.quiz[1].question)).toBeInTheDocument()
    expect(
      quizComponent.getByLabelText(data.quiz[1].answers[0].text)
    ).toBeInTheDocument()
    expect(
      quizComponent.getByLabelText(data.quiz[1].answers[1].text)
    ).toBeInTheDocument()
    expect(
      quizComponent.getByLabelText(data.quiz[1].answers[2].text)
    ).toBeInTheDocument()
    expect(
      quizComponent.getByLabelText(data.quiz[1].answers[3].text)
    ).toBeInTheDocument()
    expect(quizComponent.getByText('Check your answer')).toBeInTheDocument()
  })

  it('should display error message', async () => {
    const btn = quizComponent.getByText('Check your answer')
    await userEvent.click(btn)
    expect(quizComponent.getByText('Mark all anwers')).toBeInTheDocument()
  })

  it('should not display error message if all answer are mark', async () => {
    const btn = quizComponent.getByText('Check your answer')
    fireEvent.click(quizComponent.getByLabelText(data.quiz[0].answers[2].text))
    fireEvent.click(quizComponent.getByLabelText(data.quiz[1].answers[2].text))
    await userEvent.click(btn)
    expect(quizComponent.queryByText('Mark all anwers')).toBeNull()
  })

  it('should called mock fn if everything is ok', async () => {
    const btn = quizComponent.getByText('Check your answer')
    fireEvent.click(quizComponent.getByLabelText(data.quiz[0].answers[2].text))
    fireEvent.click(quizComponent.getByLabelText(data.quiz[1].answers[2].text))
    await userEvent.click(btn)
    expect(mockFn).toBeCalledTimes(1)
  })
})
