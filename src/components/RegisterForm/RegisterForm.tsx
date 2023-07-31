import { Controller, useForm } from 'react-hook-form'
import LabelInput from '../LabelInput/LabelInput'
import { Register } from '../../ts/types/Register'
import Button from '../Button/Button'

interface Props {
  onSubmit: (data: Register) => void
}

const RegisterForm = ({ onSubmit }: Props) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="block w-full px-12">
      <Controller
        name="username"
        control={control}
        rules={{
          required: 'Please enter your username',
          minLength: {
            value: 6,
            message: 'Username should have at least 6 chars.',
          },
          maxLength: {
            value: 30,
            message: 'Username should have less than 30 chars.',
          },
        }}
        render={({ field }) => (
          <LabelInput
            id="username"
            inputType="text"
            labelText="Username"
            fieldRef={field}
            hasError={errors.username}
          />
        )}
      />
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
      <Button type="submit" text="Submit" variant="primary" />
    </form>
  )
}

export default RegisterForm
