import { useCallback } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { Navigate } from 'react-router-dom'
import ResetPasswordForm from '../components/ResetPasswordForm/ResetPasswordForm'
import LayoutWithImage from '../layouts/LayoutWithImage'
import { ResetPassword } from '../ts/types/ResetPassword'
import useQuery from '../hooks/useQuery'
import useResetPassword from '../hooks/useResetPassword'
import useMessage from '../hooks/useMessage'
import { toastError } from '../utils/toastSettings'

const ResetPasswordPage = () => {
  const [successMsg, setSuccess] = useMessage()
  const [errorMsg, setError] = useMessage()
  const resetId = useQuery().get('resetId') || ''

  const { mutate, isLoading, isSuccess, isError } = useResetPassword(
    setError,
    setSuccess
  )

  const onSubmit = (data: ResetPassword) =>
    mutate({
      ...data,
      resetToken: resetId,
    })

  const showToast = useCallback(() => toast(errorMsg, toastError), [errorMsg])
  if (isError) showToast()

  if (!resetId.length) return <Navigate to="/" />

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
      <ToastContainer />
    </LayoutWithImage>
  )
}

export default ResetPasswordPage
