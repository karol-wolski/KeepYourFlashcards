import { useContext } from 'react'
import { useMutation } from '@tanstack/react-query'
import { loginUserFn } from '../api/authApi'
import { AuthContext, IAuthContext } from '../context/AuthContext'
import { HandleMsg } from '../ts/types/HandleMsg'

const useLogIn = (handleError: HandleMsg) => {
  const { setIsLoggedIn } = useContext(AuthContext) as IAuthContext
  return useMutation({
    mutationFn: loginUserFn,
    onSuccess: (data) => {
      localStorage.setItem('token', data.data.token)
      handleError('')
      setIsLoggedIn((state: boolean) => !state)
      window.location.reload()
    },
    onError: ({ response }) => {
      handleError(response.data.message)
    },
  })
}

export default useLogIn
