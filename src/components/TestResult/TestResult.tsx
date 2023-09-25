import { IncorrectQuestion } from '../../ts/types/Quiz'

interface Props {
  numOfQuestion: number
  numOfGoodAnswers: number
  failedAndswerArray: IncorrectQuestion[]
}

const TestResult = ({
  numOfQuestion,
  numOfGoodAnswers,
  failedAndswerArray,
}: Props) => {
  return (
    <div>
      <p className="text-[1.6rem] mb-[1.6rem]">
        Your score:{' '}
        <span className="text-[1.6rem] font-bold">
          {numOfGoodAnswers} / {numOfQuestion}
        </span>
      </p>

      {failedAndswerArray.length ? (
        <>
          <h3 className="text-[1.8rem] mb-[1.6rem]">
            List of question with an incorrect answer:
          </h3>
          {failedAndswerArray.map((elem) => {
            return (
              <div className="mb-[0.8rem]">
                <p className="text-[1.4rem]">{elem.question}</p>
                <p className="text-[1.4rem]">
                  Your answer:{' '}
                  <span className="text-danger text-[1.4rem] font-bold">
                    {elem.yourAnswer}
                  </span>
                </p>
                <p className="text-[1.4rem]">
                  Correct answer:{' '}
                  <span className="text-success text-[1.4rem] font-bold">
                    {elem.correctAnswer}
                  </span>
                </p>
              </div>
            )
          })}
        </>
      ) : (
        <p className="text-[1.6rem]">
          Good job. All your answers are correct. Keep it up :)
        </p>
      )}
    </div>
  )
}

export default TestResult
