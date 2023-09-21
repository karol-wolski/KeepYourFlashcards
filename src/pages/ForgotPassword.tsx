import { useCallback } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import ForgotPasswordForm from '../components/ForgotPasswordForm/ForgotPasswordForm'
import LayoutWithImage from '../layouts/LayoutWithImage'
import { ForgotPassword } from '../ts/types/ForgotPassword'
import useForgotPassword from '../hooks/useForgotPassword'
import useMessage from '../hooks/useMessage'
import { toastError } from '../utils/toastSettings'

const ForgotPasswordPage = () => {
  const [successMsg, setSuccess] = useMessage()
  const [errorMsg, setError] = useMessage()

  const { mutate, isLoading, isSuccess, isError } = useForgotPassword(
    setError,
    setSuccess
  )

  const onSubmit = (data: ForgotPassword) =>
    mutate({ ...data, page: 'FLASHCARD' })

  const showToast = useCallback(() => toast(errorMsg, toastError), [errorMsg])
  if (isError) showToast()

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
      <ToastContainer />
    </LayoutWithImage>
  )
}

export default ForgotPasswordPage
