import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import TestResult from './TestResult'

describe('TestResult component', () => {
  const data = {
    numOfQuestion: 7,
    numOfGoodAnswers: 6,
    failedAndswerArray: [
      {
        id: '001',
        question: 'What is the capital of Poland?',
        correctAnswer: 'Warsaw',
        yourAnswer: 'London',
      },
    ],
  }

  it('render properly', () => {
    const component = render(
      <TestResult
        numOfQuestion={data.numOfQuestion}
        numOfGoodAnswers={data.numOfGoodAnswers}
        failedAndswerArray={data.failedAndswerArray}
      />
    )
    expect(component.getByText('Your score:')).toBeInTheDocument()
    expect(component.getByText('6 / 7')).toBeInTheDocument()
    expect(
      component.getByText('List of question with an incorrect answer:')
    ).toBeInTheDocument()
    expect(
      component.getByText(data.failedAndswerArray[0].question)
    ).toBeInTheDocument()
    expect(component.getByText('Your answer:')).toBeInTheDocument()
    expect(
      component.getByText(data.failedAndswerArray[0].yourAnswer)
    ).toBeInTheDocument()
    expect(component.getByText('Correct answer:')).toBeInTheDocument()
    expect(
      component.getByText(data.failedAndswerArray[0].correctAnswer)
    ).toBeInTheDocument()
  })

  it('render properly for all answer correct', () => {
    const component = render(
      <TestResult
        numOfQuestion={data.numOfQuestion}
        numOfGoodAnswers={data.numOfQuestion}
        failedAndswerArray={[]}
      />
    )
    expect(component.getByText('Your score:')).toBeInTheDocument()
    expect(component.getByText('7 / 7')).toBeInTheDocument()
    expect(
      component.getByText(
        'Good job. All your answers are correct. Keep it up :)'
      )
    ).toBeInTheDocument()
  })
})
