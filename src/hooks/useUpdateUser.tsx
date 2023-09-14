import { useMutation } from '@tanstack/react-query'
import { UpdateUserFn } from '../api/userApi'
import { HandleMsg } from '../ts/types/HandleMsg'

const useUpdateUser = (handleError: HandleMsg, handleSuccess: HandleMsg) => {
  return useMutation({
    mutationFn: UpdateUserFn,
    onSuccess: (data) => {
      handleSuccess(data.message)
      handleError('')
    },
    onError: ({ response }) => {
      handleError(response.data.message)
    },
  })
}

export default useUpdateUser
