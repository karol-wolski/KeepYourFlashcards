import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import RegisterForm from '../components/RegisterForm/RegisterForm'
import LayoutWithImage from '../layouts/LayoutWithImage'
import { Register as RegisterType } from '../ts/types/Register'
import { signUpUserFn } from '../api/authApi'

const RegisterPage = () => {
  const [successMsg, setSuccessMsg] = useState<string>('')
  const [errorMsg, setErrorMsg] = useState<string>('')
  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: signUpUserFn,
    onSuccess: (data) => {
      setSuccessMsg(data.message)
      setErrorMsg('')
    },
    onError: ({ response }) => {
      setErrorMsg(response.data.message)
    },
  })

  const onSubmit = (data: RegisterType) =>
    mutate({ ...data, page: 'FLASHCARD' })

  return (
    <LayoutWithImage title="Sign up">
      {isSuccess ? (
        <p className="text-[1.8rem] px-[1.6rem]">{successMsg}</p>
      ) : (
        <RegisterForm
          onSubmit={onSubmit}
          isLoading={isLoading}
          error={errorMsg}
        />
      )}
    </LayoutWithImage>
  )
}

export default RegisterPage
