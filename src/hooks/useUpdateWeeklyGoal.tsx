import { useMutation } from '@tanstack/react-query'
import queryClient from '../api/queryClient'
import { PatchWeeklyGoal } from '../api/statsApi'
import { HandleMsg } from '../ts/types/HandleMsg'

const useUpdateWeeklyGoal = (
  handleError: HandleMsg,
  handleSuccess: HandleMsg
) => {
  return useMutation({
    mutationFn: PatchWeeklyGoal,
    onSuccess: (data) => {
      queryClient.setQueryData(['weeklyGoal'], () => {
        return data
      })
      queryClient.invalidateQueries({ queryKey: ['weeklyGoal'] })
      handleSuccess(data.message)
      handleError('')
    },
    onError: ({ response }) => {
      handleError(response.data.message)
    },
  })
}

export default useUpdateWeeklyGoal
