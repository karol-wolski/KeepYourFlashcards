import { useState } from 'react'
import RegisterForm from '../components/RegisterForm/RegisterForm'
import LayoutWithImage from '../layouts/LayoutWithImage'
import { Register as RegisterType } from '../ts/types/Register'
import useRegister from '../hooks/useRegister'

const RegisterPage = () => {
  const [successMsg, setSuccessMsg] = useState<string>('')
  const [errorMsg, setErrorMsg] = useState<string>('')
  const setSuccess = (msg: string) => setSuccessMsg(msg)
  const setError = (msg: string) => setErrorMsg(msg)
  const { mutate, isLoading, isSuccess } = useRegister(setError, setSuccess)

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
