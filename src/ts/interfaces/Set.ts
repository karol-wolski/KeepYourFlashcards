import { FieldValues } from 'react-hook-form'

export interface Set extends FieldValues {
  _id: string
  name: string
  cards: {
    question: string
    answers: {
      text: string
      isCorrect: boolean
    }[]
  }[]
  frontLang?: string | undefined
  backLang?: string | undefined
}
