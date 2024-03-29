import { Fragment } from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import Select from 'react-select'
import Button from '../Button/Button'
import LabelInput from '../LabelInput/LabelInput'
import { Answer } from '../../ts/types/Quiz'
import { Set } from '../../ts/interfaces/Set'
import { Form } from '../../ts/interfaces/Form'
import cardLangs from '../../constants/CardLang'

const EditSet = ({
  onSubmit,
  onDelete,
  additionalBtnFn,
  additionalBtnName,
  isLoading,
  error,
  defaultData,
}: Form<Set>) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Set>({
    defaultValues: defaultData,
  })

  const { fields, append, remove } = useFieldArray<Set>({
    control,
    name: 'cards',
  })

  const formatSubmit = (data: Set) => {
    const answers = data.cards.map((el) =>
      el.answers.map((answer: Answer, index: number) => {
        return {
          ...answer,
          isCorrect: index === 0,
        }
      })
    )

    const cards = data.cards.map((el, index: number) => ({
      ...el,
      answers: answers[index],
    }))

    const set = { ...data, cards }
    return onSubmit(set)
  }

  return (
    <form className="grid gap-[3.2rem]" onSubmit={handleSubmit(formatSubmit)}>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        rules={{
          required: true && 'Please enter the title of your set',
          minLength: {
            value: 4,
            message: 'Name should have at least 4 chars.',
          },
        }}
        render={({ field }) => (
          <LabelInput
            inputType="text"
            labelText="Title"
            id="title"
            hasError={errors.name}
            fieldRef={field}
          />
        )}
      />

      <span className="text-[1.6rem]">Language front</span>
      <Controller
        control={control}
        defaultValue=""
        render={({ field: { onChange, value, name, ref } }) => (
          <Select
            ref={ref}
            value={cardLangs.find((c) => c.value === value)}
            name={name}
            options={cardLangs}
            onChange={(selectedOption: any) => {
              onChange(selectedOption.value)
            }}
            classNames={{
              control: () => 'text-[3rem]',
              menuList: () => 'text-[1.2rem]',
            }}
          />
        )}
        name="frontLang"
      />

      <span className="text-[1.6rem]">Language back</span>
      <Controller
        control={control}
        defaultValue=""
        render={({ field: { onChange, value, name, ref } }) => (
          <Select
            ref={ref}
            value={cardLangs.find((c) => c.value === value)}
            name={name}
            options={cardLangs}
            onChange={(selectedOption: any) => {
              onChange(selectedOption.value)
            }}
            classNames={{
              control: () => 'text-[3rem]',
              menuList: () => 'text-[1.2rem]',
            }}
          />
        )}
        name="backLang"
      />

      <div className=" [&>*:nth-child(2)]:mb-[1.6rem]">
        <h3 className="text-[1.6rem] mb-[1.8rem] font-bold">Cards</h3>
        {fields.map(({ id }, index) => {
          return (
            <Fragment key={id}>
              <Controller
                name={`cards[${index}].question`}
                control={control}
                defaultValue=""
                rules={{
                  required: true && 'Please enter the question',
                  minLength: {
                    value: 2,
                    message: 'Question should have at least 2 chars.',
                  },
                }}
                render={({ field }) => (
                  <LabelInput
                    inputType="text"
                    labelText="Question"
                    id="question"
                    hasError={errors.cards && errors?.cards[index]?.question}
                    fieldRef={field}
                  />
                )}
              />
              <div className="grid grid-cols-2 gap-[1.6rem] mt-[1.6rem] mb-[3.2rem] [&>*:last-child]:justify-self-start">
                <Controller
                  name={`cards[${index}].answers[0].text`}
                  control={control}
                  defaultValue=""
                  rules={{
                    required: true && 'Please enter the correct answer',
                  }}
                  render={({ field }) => (
                    <LabelInput
                      inputType="text"
                      labelText="Correct answer"
                      id="correct-answer"
                      hasError={
                        errors.cards && errors?.cards[index]?.answers?.[0]?.text
                      }
                      fieldRef={field}
                    />
                  )}
                />
                <Controller
                  name={`cards[${index}].answers[1].text`}
                  control={control}
                  defaultValue=""
                  rules={{
                    required: true && 'Please enter the first false answer',
                  }}
                  render={({ field }) => (
                    <LabelInput
                      inputType="text"
                      labelText="False answer"
                      id="false-answer"
                      hasError={
                        errors.cards && errors?.cards[index]?.answers?.[1]?.text
                      }
                      fieldRef={field}
                    />
                  )}
                />
                <Controller
                  name={`cards[${index}].answers[2].text`}
                  control={control}
                  defaultValue=""
                  rules={{
                    required: true && 'Please enter the second false answer',
                  }}
                  render={({ field }) => (
                    <LabelInput
                      inputType="text"
                      labelText="False answer"
                      id="false-answer-2"
                      hasError={
                        errors.cards && errors?.cards[index]?.answers?.[2]?.text
                      }
                      fieldRef={field}
                    />
                  )}
                />
                <Controller
                  name={`cards[${index}].answers[3].text`}
                  control={control}
                  defaultValue=""
                  rules={{
                    required: true && 'Please enter the third false answer',
                  }}
                  render={({ field }) => (
                    <LabelInput
                      inputType="text"
                      labelText="False answer"
                      id="false-answer-3"
                      hasError={
                        errors.cards && errors?.cards[index]?.answers?.[3]?.text
                      }
                      fieldRef={field}
                    />
                  )}
                />
                <Button
                  type="button"
                  variant="danger"
                  onClick={() => remove(index)}
                  ariaLabel="Remove question"
                >
                  <i className="fa-solid fa-trash text-[1.6rem]" />
                </Button>
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
          {additionalBtnName && (
            <Button type="button" variant="warn" onClick={additionalBtnFn}>
              {additionalBtnName}
            </Button>
          )}
          <Button type="button" variant="danger" onClick={onDelete}>
            Remove set
          </Button>
          <Button type="submit" variant="success">
            {isLoading ? 'Saving...' : 'Save'}
          </Button>
        </div>
        {error && <p>{error}</p>}
      </div>
    </form>
  )
}

export default EditSet
