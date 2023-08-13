import { useState } from 'react'
import { IncorrectQuestion, Question } from '../../ts/types/Quiz'
import Quiz from '../Quiz/Quiz'
import TestResult from '../TestResult/TestResult'

interface Props {
  collection: {
    name: string
    quiz: Question[]
  }
}

type Result = {
  score: number
  failedAnswers: IncorrectQuestion[]
}

const TestMode = ({ collection }: Props) => {
  const [result, setResult] = useState<Result | undefined>()
  const handleResult = (counter: number, questionss: IncorrectQuestion[]) =>
    setResult({
      score: counter,
      failedAnswers: questionss,
    })

  return (
    <div className="mb-4 flex flex-col gap-[5rem]">
      <h2 className="font-bold text-[1.6rem]">{collection.name} - Quiz mode</h2>
      {!result ? (
        <Quiz questions={collection.quiz} handleResult={handleResult} />
      ) : (
        <TestResult
          numOfQuestion={collection.quiz.length}
          numOfGoodAnswers={result.score}
          failedAndswerArray={result.failedAnswers}
        />
      )}
    </div>
  )
}

export default TestMode
