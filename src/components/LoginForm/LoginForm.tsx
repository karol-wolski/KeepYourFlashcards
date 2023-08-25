import { Controller, useForm } from 'react-hook-form'
import LabelInput from '../LabelInput/LabelInput'
import { Login } from '../../ts/types/Login'
import Button from '../Button/Button'

interface Props {
  onSubmit: (data: Login) => void
  isLoading: boolean
  error: string
}

const LoginForm = ({ onSubmit, isLoading, error }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
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
      <Button type="submit" variant="primary">
        {isLoading ? 'Submiting...' : 'Submit'}
      </Button>
      {error && <p>{error}</p>}
    </form>
  )
}

export default LoginForm
