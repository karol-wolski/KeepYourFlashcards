import { useState } from 'react'
import LoginForm from '../components/LoginForm/LoginForm'
import LayoutWithImage from '../layouts/LayoutWithImage'
import { Login } from '../ts/types/Login'
import useLogIn from '../hooks/useLogIn'

const LoginPage = () => {
  const [errorMsg, setErrorMsg] = useState<string>('')

  const setError = (msg: string) => setErrorMsg(msg)

  const { mutate, isLoading } = useLogIn(setError)
  const onSubmit = (data: Login) => mutate(data)

  return (
    <LayoutWithImage title="Login">
      <LoginForm onSubmit={onSubmit} isLoading={isLoading} error={errorMsg} />
    </LayoutWithImage>
  )
}

export default LoginPage
