import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { loginUserFn } from '../api/authApi'
import { AuthContext, IAuthContext } from '../context/AuthContext'
import { HandleMsg } from '../ts/types/HandleMsg'

const useLogIn = (handleError: HandleMsg) => {
  const { setIsLoggedIn } = useContext(AuthContext) as IAuthContext
  const navigate = useNavigate()
  return useMutation({
    mutationFn: loginUserFn,
    onSuccess: (data) => {
      localStorage.setItem('token', data.data.token)
      handleError('')
      setIsLoggedIn((state: boolean) => !state)
      return navigate('/profile')
    },
    onError: ({ response }) => {
      handleError(response.data.message)
    },
  })
}

export default useLogIn
