import { FieldValues } from 'react-hook-form'

export interface CreateSet extends FieldValues {
  name: string
  cards: {
    question: string
    answers: {
      text: string
      isCorrect: boolean
    }[]
  }[]
}
