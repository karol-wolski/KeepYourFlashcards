import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form'

interface Props {
  id: string
  value: string
  register: UseFormRegister<FieldValues>
  registerKey: string
  validationSchema: RegisterOptions<FieldValues, string>
}

const LabelInputRadio = ({
  id,
  value,
  register,
  registerKey,
  validationSchema,
}: Props) => {
  return (
    <div key={value}>
      <label htmlFor={id} className="text-[1.6rem]">
        <input
          {...register(registerKey, validationSchema)}
          id={id}
          type="radio"
          value={value}
          className="mr-[0.8rem]"
        />
        {value}
      </label>
    </div>
  )
}

export default LabelInputRadio
