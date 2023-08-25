import { useState, useContext } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../components/LoginForm/LoginForm'
import LayoutWithImage from '../layouts/LayoutWithImage'
import { Login } from '../ts/types/Login'
import { loginUserFn } from '../api/authApi'
import { AuthContext, IAuthContext } from '../context/AuthContext'

const LoginPage = () => {
  const { setIsLoggedIn } = useContext(AuthContext) as IAuthContext
  const navigate = useNavigate()
  const [errorMsg, setErrorMsg] = useState<string>('')
  const { mutate, isLoading } = useMutation({
    mutationFn: loginUserFn,
    onSuccess: (data) => {
      localStorage.setItem('token', data.data.token)
      setErrorMsg('')
      setIsLoggedIn((state: boolean) => !state)
      return navigate('/profile')
    },
    onError: ({ response }) => {
      setErrorMsg(response.data.message)
    },
  })

  const onSubmit = (data: Login) => mutate(data)

  return (
    <LayoutWithImage title="Login">
      <LoginForm onSubmit={onSubmit} isLoading={isLoading} error={errorMsg} />
    </LayoutWithImage>
  )
}

export default LoginPage
