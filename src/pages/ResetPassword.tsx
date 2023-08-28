import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { Navigate } from 'react-router-dom'
import { resetPasswordFn } from '../api/authApi'
import ResetPasswordForm from '../components/ResetPasswordForm/ResetPasswordForm'
import LayoutWithImage from '../layouts/LayoutWithImage'
import { ResetPassword } from '../ts/types/ResetPassword'
import useQuery from '../hooks/useQuery'

const ResetPasswordPage = () => {
  const [successMsg, setSuccessMsg] = useState<string>('')
  const [errorMsg, setErrorMsg] = useState<string>('')
  const resetId = useQuery().get('resetId') || ''
  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: resetPasswordFn,
    onSuccess: (data) => {
      setSuccessMsg(data.message)
      setErrorMsg('')
    },
    onError: ({ response }) => {
      setErrorMsg(response.data.message)
    },
  })

  const onSubmit = (data: ResetPassword) =>
    mutate({
      ...data,
      resetToken: resetId,
    })

  if (!resetId.length) {
    return <Navigate to="/" />
  }

  return (
    <LayoutWithImage title="Create new password">
      {isSuccess ? (
        <p className="text-[1.8rem] px-[1.6rem]">{successMsg}</p>
      ) : (
        <ResetPasswordForm
          onSubmit={onSubmit}
          isLoading={isLoading}
          error={errorMsg}
        />
      )}
    </LayoutWithImage>
  )
}

export default ResetPasswordPage
