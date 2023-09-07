import { useState } from 'react'
import ForgotPasswordForm from '../components/ForgotPasswordForm/ForgotPasswordForm'
import LayoutWithImage from '../layouts/LayoutWithImage'
import { ForgotPassword } from '../ts/types/ForgotPassword'
import useForgotPassword from '../hooks/useForgotPassword'

const ForgotPasswordPage = () => {
  const [successMsg, setSuccessMsg] = useState<string>('')
  const [errorMsg, setErrorMsg] = useState<string>('')

  const setSuccess = (msg: string) => setSuccessMsg(msg)
  const setError = (msg: string) => setErrorMsg(msg)

  const { mutate, isLoading, isSuccess } = useForgotPassword(
    setError,
    setSuccess
  )

  const onSubmit = (data: ForgotPassword) =>
    mutate({ ...data, page: 'FLASHCARD' })

  return (
    <LayoutWithImage title="Forgot Password">
      {isSuccess ? (
        <p className="text-[1.8rem] px-[1.6rem]">{successMsg}</p>
      ) : (
        <ForgotPasswordForm
          onSubmit={onSubmit}
          isLoading={isLoading}
          error={errorMsg}
        />
      )}
    </LayoutWithImage>
  )
}

export default ForgotPasswordPage
