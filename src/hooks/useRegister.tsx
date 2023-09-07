import { useMutation } from '@tanstack/react-query'
import { signUpUserFn } from '../api/authApi'
import { HandleMsg } from '../ts/types/HandleMsg'

const useRegister = (handleError: HandleMsg, handleSuccess: HandleMsg) => {
  return useMutation({
    mutationFn: signUpUserFn,
    onSuccess: (data) => {
      handleSuccess(data.message)
      handleError('')
    },
    onError: ({ response }) => {
      handleError(response.data.message)
    },
  })
}

export default useRegister
