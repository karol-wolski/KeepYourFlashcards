import { Fragment } from 'react'
import { FieldValues, useFieldArray, useForm } from 'react-hook-form'
import Button from '../Button/Button'
import LabelInput from '../LabelInput/LabelInput'
import { Answer } from '../../ts/types/Quiz'

interface NewSet extends FieldValues {
  title: string
  flashcards: {
    question: string
    answers: {
      text: string
      isCorrect: boolean
    }[]
  }[]
}

const AddSet = () => {
  const { register, control, handleSubmit } = useForm<NewSet>()
  const { fields, append } = useFieldArray<NewSet>({
    control,
    name: 'flashcards',
  })

  const formatSubmit = (data: NewSet) => {
    const answers = data.flashcards.map((el) =>
      el.answers.map((answer: Answer, index: number) => {
        return {
          ...answer,
          isCorrect: index === 0,
        }
      })
    )

    const flashcards = data.flashcards.map((el, index: number) => ({
      ...el,
      answers: answers[index],
    }))

    const set = { ...data, flashcards }
    return set
  }

  return (
    <form className="grid gap-[3.2rem]" onSubmit={handleSubmit(formatSubmit)}>
      <LabelInput
        inputType="text"
        labelText="Title"
        id="title"
        hasError={undefined}
        fieldRef={register('title')}
      />
      <div className=" [&>*:nth-child(2)]:mb-[1.6rem]">
        <h3 className="text-[1.6rem] mb-[1.8rem] font-bold">Cards</h3>
        {fields.map(({ id }, index) => {
          return (
            <Fragment key={id}>
              <LabelInput
                inputType="text"
                labelText="Question"
                id="question"
                hasError={undefined}
                fieldRef={register(`flashcards[${index}].question`)}
              />
              <div className="grid grid-cols-2 gap-[1.6rem] mt-[1.6rem] mb-[3.2rem]">
                <LabelInput
                  inputType="text"
                  labelText="Correct answer"
                  id="correct-answer"
                  hasError={undefined}
                  fieldRef={register(`flashcards[${index}].answers[0].text`)}
                />
                <LabelInput
                  inputType="text"
                  labelText="False answer"
                  id="false-answer"
                  hasError={undefined}
                  fieldRef={register(`flashcards[${index}].answers[1].text`)}
                />
                <LabelInput
                  inputType="text"
                  labelText="False answer"
                  id="false-answer-2"
                  hasError={undefined}
                  fieldRef={register(`flashcards[${index}].answers[2].text`)}
                />
                <LabelInput
                  inputType="text"
                  labelText="False answer"
                  id="false-answer-3"
                  hasError={undefined}
                  fieldRef={register(`flashcards[${index}].answers[3].text`)}
                />
              </div>
            </Fragment>
          )
        })}
      </div>
      <div className="flex justify-between">
        <Button type="button" variant="primary" onClick={() => append({})}>
          Add card
        </Button>
        <div className="flex gap-[1.6rem]">
          <Button type="submit" variant="success">
            Save
          </Button>
          <Button type="button" variant="danger">
            Remove
          </Button>
        </div>
      </div>
    </form>
  )
}

export default AddSet
