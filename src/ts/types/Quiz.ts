export type IncorrectQuestion = {
  id: string
  question: string
  correctAnswer: string
  yourAnswer: string
}

export type Answer = {
  text: string
  isCorrect: boolean
}

export type Question = {
  _id: string
  question: string
  answers: Answer[]
}
