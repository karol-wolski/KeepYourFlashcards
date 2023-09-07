import { useMutation } from '@tanstack/react-query'
import { resetPasswordFn } from '../api/authApi'
import { HandleMsg } from '../ts/types/HandleMsg'

const useResetPassword = (handleError: HandleMsg, handleSuccess: HandleMsg) => {
  return useMutation({
    mutationFn: resetPasswordFn,
    onSuccess: (data) => {
      handleSuccess(data.message)
      handleError('')
    },
    onError: ({ response }) => {
      handleError(response.data.message)
    },
  })
}

export default useResetPassword
