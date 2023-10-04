import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import LabelInput from '../LabelInput/LabelInput'
import Button from '../Button/Button'
import { Form } from '../../ts/interfaces/Form'
import { WeeklyGoal } from '../../ts/types/WeeklyGoal'

const EditUserWeeklyGoalForm = ({
  onSubmit,
  isLoading,
  error,
  isSuccess,
  defaultData,
}: Form<WeeklyGoal>) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: defaultData,
  })

  useEffect(() => {
    reset()
  }, [isSuccess, reset])

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form form-btn-self-start"
    >
      <Controller
        name="time"
        control={control}
        rules={{
          required: 'Please enter minimum weekly time',
          min: {
            value: 1,
            message: 'Minimum value should be higher than 0',
          },
          max: {
            value: 1440,
            message: 'Max value should be less than 1440.',
          },
        }}
        render={({ field }) => (
          <LabelInput
            id="time"
            inputType="number"
            labelText="Time"
            fieldRef={field}
            hasError={errors.time}
          />
        )}
      />
      <Controller
        name="repetitions"
        control={control}
        rules={{
          required: 'Please enter the number of repetitions',
          min: {
            value: 1,
            message: 'Minimum value should be higher than 0',
          },
          max: {
            value: 10000,
            message: 'Max value should be less than 10000.',
          },
        }}
        render={({ field }) => (
          <LabelInput
            id="repetitions"
            inputType="number"
            labelText="Num of repetitions"
            fieldRef={field}
            hasError={errors.repetitions}
          />
        )}
      />

      <Button type="submit" variant="primary">
        {isLoading ? 'Saving...' : 'Save'}
      </Button>
      {error && <p>{error}</p>}
    </form>
  )
}

export default EditUserWeeklyGoalForm
