import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import Button from '../Button/Button'
import LabelInputRadio from '../LabelInputRadio/LabelInputRadio'
import { IncorrectQuestions, Question } from '../../ts/types/Quiz'
import isEmptyObject from '../../utils/isEmptyObject'

interface Props {
  questions: Question[]
  callback: (counter: number, questions: IncorrectQuestions) => void
}

const Quiz = ({ questions, callback }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    let counter = 0
    const array: IncorrectQuestions = []

    Object.entries(data).forEach(([key, value]) => {
      const question = questions.find((item) => item.id === key)
      const correctAnswer = question?.answers.find(
        (item) => item.isCorrect === true
      )
      const answer = question?.answers.find((item) => item.text === value)

      if (answer?.isCorrect) counter += 1

      if (!answer?.isCorrect && question && correctAnswer) {
        array.push({
          id: question.id,
          question: question.question,
          correctAnswer: correctAnswer.text,
          yourAnswer: value as string,
        })
      }
    })

    callback(counter, array)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-[1.6rem] [&>*:last-child]:self-start"
    >
      {questions.map((question) => (
        <div key={question.id}>
          <p className="text-[1.6rem]">{question.question}</p>
          {question.answers.map((answer, i) => (
            <LabelInputRadio
              key={answer.text}
              id={`${question.id}-${i}`}
              value={answer.text}
              register={register}
              registerKey={question.id}
              validationSchema={{ required: 'Mark correct answer' }}
            />
          ))}
        </div>
      ))}

      {!isEmptyObject(errors) && (
        <p className="text-danger text-[1.4rem]">Mark all anwers</p>
      )}

      <Button type="submit" variant="primary">
        Check your answer
      </Button>
    </form>
  )
}

export default Quiz
