import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import ForgotPasswordForm from '../components/ForgotPasswordForm/ForgotPasswordForm'
import LayoutWithImage from '../layouts/LayoutWithImage'
import { ForgotPassword } from '../ts/types/ForgotPassword'
import { forgotUserPasswordFn } from '../api/authApi'

const ForgotPasswordPage = () => {
  const [successMsg, setSuccessMsg] = useState<string>('')
  const [errorMsg, setErrorMsg] = useState<string>('')
  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: forgotUserPasswordFn,
    onSuccess: (data) => {
      setSuccessMsg(data.message)
      setErrorMsg('')
    },
    onError: ({ response }) => {
      setErrorMsg(response.data.message)
    },
  })

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
