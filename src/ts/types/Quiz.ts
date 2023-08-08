type IncorrectQuestion = {
  id: string
  question: string
  correctAnswer: string
  yourAnswer: string
}

export type IncorrectQuestions = IncorrectQuestion[]

type Answer = {
  text: string
  isCorrect: boolean
}

export type Question = {
  id: string
  question: string
  answers: Answer[]
}
