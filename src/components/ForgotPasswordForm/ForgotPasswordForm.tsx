import { Controller, useForm } from 'react-hook-form'
import LabelInput from '../LabelInput/LabelInput'
import { ForgotPassword } from '../../ts/types/ForgotPassword'

interface Props {
  onSubmit: (data: ForgotPassword) => void
}

const ForgotPasswordForm = ({ onSubmit }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
    },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="block w-full px-12">
      <Controller
        name="email"
        control={control}
        rules={{
          required: 'Please enter your email',
          minLength: {
            value: 4,
            message: 'Email should have at least 4 chars.',
          },
          maxLength: {
            value: 320,
            message: 'Email should have less than 320 chars.',
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'The email address is in the wrong format.',
          },
        }}
        render={({ field }) => (
          <LabelInput
            id="email"
            inputType="email"
            labelText="Email"
            fieldRef={field}
            hasError={errors.email}
          />
        )}
      />
      <button
        type="submit"
        className="bg-blue-700 hover:bg-blue-800 py-2 px-4 mt-4 text-white rounded-lg"
      >
        Submit
      </button>
    </form>
  )
}

export default ForgotPasswordForm
