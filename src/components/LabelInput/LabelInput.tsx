import { HTMLInputTypeAttribute } from 'react'
import { FieldError } from 'react-hook-form'

interface Props {
  id: string
  labelText: string
  inputType: HTMLInputTypeAttribute
  fieldRef: unknown
  hasError: FieldError | undefined
}

const LabelInput = ({
  id,
  inputType,
  labelText,
  hasError,
  fieldRef,
}: Props) => {
  return (
    <div>
      <label htmlFor={id} className="block mt-4 text-sm">
        {labelText}
        <input
          type={inputType}
          id={id}
          className="my-0.5 block w-full px-0.5
        border-0 border-b-2 border-black bg-transparent
        focus:ring-0 focus:border-blue-800 autofill:bg-transparent"
          {...(fieldRef as object)}
        />
      </label>
      <span className="text-xs text-red-700 italic h-2 block">
        {hasError?.message}
      </span>
    </div>
  )
}

export default LabelInput
