import { Controller, useForm } from 'react-hook-form'
import LabelInput from '../LabelInput/LabelInput'
import { ResetPassword } from '../../ts/types/ResetPassword'
import Button from '../Button/Button'
import { Form } from '../../ts/interfaces/Form'

const ResetPasswordForm = ({
  onSubmit,
  isLoading,
  error,
}: Form<ResetPassword>) => {
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form form-btn-self-start"
    >
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
      <Button type="submit" variant="primary">
        {isLoading ? 'Submiting...' : 'Submit'}
      </Button>
      {error && <p>{error}</p>}
    </form>
  )
}

export default ResetPasswordForm
