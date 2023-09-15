import { Controller, useForm } from 'react-hook-form'
import Button from '../Button/Button'
import LabelInput from '../LabelInput/LabelInput'
import { Form } from '../../ts/interfaces/Form'
import { Profile } from '../../ts/types/Profile'

const EditUser = ({
  onSubmit,
  isLoading,
  error,
  defaultData,
}: Form<Profile>) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Profile>({
    defaultValues: defaultData,
  })

  return (
    <form
      className="form form-btn-self-start"
      onSubmit={handleSubmit(onSubmit)}
    >
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
      <Button type="submit" variant="primary">
        {isLoading ? 'Saving...' : 'Save'}
      </Button>
      {error && <p>{error}</p>}
    </form>
  )
}

export default EditUser
