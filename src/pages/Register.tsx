import { useCallback } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import RegisterForm from '../components/RegisterForm/RegisterForm'
import LayoutWithImage from '../layouts/LayoutWithImage'
import { Register as RegisterType } from '../ts/types/Register'
import useRegister from '../hooks/useRegister'
import useMessage from '../hooks/useMessage'
import { toastError } from '../utils/toastSettings'

const RegisterPage = () => {
  const [successMsg, setSuccess] = useMessage()
  const [errorMsg, setError] = useMessage()
  const { mutate, isLoading, isSuccess, isError } = useRegister(
    setError,
    setSuccess
  )
  const onSubmit = (data: RegisterType) =>
    mutate({ ...data, page: 'FLASHCARD' })

  const showToast = useCallback(() => toast(errorMsg, toastError), [errorMsg])
  if (isError) showToast()

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
      <ToastContainer />
    </LayoutWithImage>
  )
}

export default RegisterPage
