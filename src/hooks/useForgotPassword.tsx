import { useMutation } from '@tanstack/react-query'
import { HandleMsg } from '../ts/types/HandleMsg'
import { forgotUserPasswordFn } from '../api/authApi'

const useForgotPassword = (
  handleError: HandleMsg,
  handleSuccess: HandleMsg
) => {
  return useMutation({
    mutationFn: forgotUserPasswordFn,
    onSuccess: (data) => {
      handleSuccess(data.message)
      handleError('')
    },
    onError: ({ response }) => {
      handleError(response.data.message)
    },
  })
}

export default useForgotPassword
