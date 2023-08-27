import { Controller, useForm } from 'react-hook-form'
import LabelInput from '../LabelInput/LabelInput'
import { ForgotPassword } from '../../ts/types/ForgotPassword'
import Button from '../Button/Button'
import { Form } from '../../ts/interfaces/Form'

const ForgotPasswordForm = ({
  onSubmit,
  isLoading,
  error,
}: Form<ForgotPassword>) => {
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form form-btn-self-start"
    >
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
      <Button type="submit" variant="primary">
        {isLoading ? 'Submiting...' : 'Submit'}
      </Button>
      {error && <p>{error}</p>}
    </form>
  )
}

export default ForgotPasswordForm
