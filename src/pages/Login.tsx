import { useCallback } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import LoginForm from '../components/LoginForm/LoginForm'
import LayoutWithImage from '../layouts/LayoutWithImage'
import { Login } from '../ts/types/Login'
import useLogIn from '../hooks/useLogIn'
import useMessage from '../hooks/useMessage'
import { toastError } from '../utils/toastSettings'

const LoginPage = () => {
  const [errorMsg, setError] = useMessage()
  const { mutate, isLoading, isError } = useLogIn(setError)
  const onSubmit = (data: Login) => mutate(data)

  const showToast = useCallback(() => toast(errorMsg, toastError), [errorMsg])
  if (isError) showToast()

  return (
    <LayoutWithImage title="Login">
      <LoginForm onSubmit={onSubmit} isLoading={isLoading} />
      <ToastContainer />
    </LayoutWithImage>
  )
}

export default LoginPage
