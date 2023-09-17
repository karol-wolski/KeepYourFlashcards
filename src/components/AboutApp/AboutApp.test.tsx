import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import AboutApp from './AboutApp'

describe('AboutApp component', () => {
  it('render properly', () => {
    const { getByText, getByRole, container } = render(<AboutApp />)

    expect(
      getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('What is Keep Your Flashcards?')

    expect(
      getByText(
        'Keep Your Flashcards is an application that gives you the opportunity to expand your knowledge using virtual flashcards. The application provides four learning modes: learn, repeat, test, match.'
      )
    ).toBeInTheDocument()

    expect(
      getByRole('heading', {
        level: 3,
        name: 'Study',
      })
    ).toBeInTheDocument()

    const iconStudy = container.querySelector('.fa-book-open')
    expect(iconStudy).toBeInTheDocument()

    expect(
      getByText(
        'Mode allows you to view the list of cards. In this mode you can see both sides of the card or just one side and turn the card over to see the back.'
      )
    ).toBeInTheDocument()

    expect(
      getByRole('heading', {
        level: 3,
        name: 'Repeat',
      })
    ).toBeInTheDocument()

    const iconRepeat = container.querySelector('.fa-chalkboard')
    expect(iconRepeat).toBeInTheDocument()

    expect(
      getByText(
        'In this mode you only see the question and you have to answer it. Next, you can compare your answer with the correct answer.'
      )
    ).toBeInTheDocument()

    expect(
      getByRole('heading', {
        level: 3,
        name: 'Test',
      })
    ).toBeInTheDocument()

    const iconTest = container.querySelector('.fa-file')
    expect(iconTest).toBeInTheDocument()

    expect(
      getByText(
        'In this mode you are given 10 random questions, selected from a list of all your cards in the set. Each question has 4 answer but only one is correct.'
      )
    ).toBeInTheDocument()

    expect(
      getByRole('heading', {
        level: 3,
        name: 'Matching',
      })
    ).toBeInTheDocument()

    const iconMatching = container.querySelector('.fa-clone')
    expect(iconMatching).toBeInTheDocument()

    expect(
      getByText(
        'In this mode you have randomly placed questions and answers. Your task is to properly match the question with the answer.'
      )
    ).toBeInTheDocument()
  })
})
