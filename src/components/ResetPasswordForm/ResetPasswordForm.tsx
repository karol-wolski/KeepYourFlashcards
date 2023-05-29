import { Controller, useForm } from 'react-hook-form'
import LabelInput from '../LabelInput/LabelInput'
import { ResetPassword } from '../../ts/types/ResetPassword'

interface Props {
  onSubmit: (data: ResetPassword) => void
}

const ResetPasswordForm = ({ onSubmit }: Props) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="block w-full px-12">
      <Controller
        name="password"
        control={control}
        rules={{
          required: 'Please enter your password',
          minLength: {
            value: 8,
            message: 'Password should have at least 8 chars.',
          },
          maxLength: {
            value: 32,
            message: 'Password should have less than 32 chars.',
          },
        }}
        render={({ field }) => (
          <LabelInput
            id="password"
            inputType="password"
            labelText="Password"
            fieldRef={field}
            hasError={errors.password}
          />
        )}
      />
      <Controller
        name="confirmPassword"
        control={control}
        rules={{
          required: true && 'Please enter your password',
          minLength: {
            value: 8,
            message: 'Confirm password should have at least 8 chars.',
          },
          maxLength: {
            value: 32,
            message: 'Confirm password should have less than 32 chars.',
          },
          validate: (val: string) =>
            watch('password') !== val
              ? 'Your passwords do not match'
              : undefined,
        }}
        render={({ field }) => (
          <LabelInput
            id="confirmPassword"
            inputType="password"
            labelText="Confirm Password"
            fieldRef={field}
            hasError={errors.confirmPassword}
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

export default ResetPasswordForm
