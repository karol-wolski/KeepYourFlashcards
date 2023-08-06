import { IncorrectQuestions, Question } from '../../ts/types/Quiz'
import Quiz from '../Quiz/Quiz'

interface Props {
  collection: {
    name: string
    quiz: Question[]
  }
}

const TestMode = ({ collection }: Props) => {
  const cb = (counter: number, questionss: IncorrectQuestions) =>
    console.log(counter, questionss)

  return (
    <div className="mb-4 flex flex-col gap-[5rem]">
      <h2 className="font-bold text-[1.6rem]">{collection.name} - Quiz mode</h2>
      <Quiz questions={collection.quiz} callback={cb} />
    </div>
  )
}

export default TestMode
