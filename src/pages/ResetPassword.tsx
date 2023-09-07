import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import ResetPasswordForm from '../components/ResetPasswordForm/ResetPasswordForm'
import LayoutWithImage from '../layouts/LayoutWithImage'
import { ResetPassword } from '../ts/types/ResetPassword'
import useQuery from '../hooks/useQuery'
import useResetPassword from '../hooks/useResetPassword'

const ResetPasswordPage = () => {
  const [successMsg, setSuccessMsg] = useState<string>('')
  const [errorMsg, setErrorMsg] = useState<string>('')
  const resetId = useQuery().get('resetId') || ''

  const setSuccess = (msg: string) => setSuccessMsg(msg)
  const setError = (msg: string) => setErrorMsg(msg)

  const { mutate, isLoading, isSuccess } = useResetPassword(
    setError,
    setSuccess
  )

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
