import { useMutation } from '@tanstack/react-query'
import { HandleMsg } from '../ts/types/HandleMsg'
import { UpdateUserPasswordFn } from '../api/userApi'

const useEditUserPassword = (
  handleError: HandleMsg,
  handleSuccess: HandleMsg
) => {
  return useMutation({
    mutationFn: UpdateUserPasswordFn,
    onSuccess: (data) => {
      handleSuccess(data.message)
      handleError('')
    },
    onError: ({ response }) => {
      handleError(response.data.message)
    },
  })
}

export default useEditUserPassword
