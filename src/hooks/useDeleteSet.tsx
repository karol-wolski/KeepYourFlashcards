import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { HandleMsg } from '../ts/types/HandleMsg'
import { DeleteSetFn } from '../api/cardsApi'
import queryClient from '../api/queryClient'
import { Sets } from '../ts/types/Sets'

const useDeleteSet = (handleError: HandleMsg) => {
  const navigate = useNavigate()
  return useMutation({
    mutationFn: DeleteSetFn,
    onSuccess: ({ data }) => {
      queryClient.setQueryData<Sets[]>(['sets'], (oldSets) => {
        if (oldSets) {
          const array = oldSets.filter((elem) => elem._id !== data._id)
          return array
        }
        return []
      })
      queryClient.invalidateQueries({ queryKey: ['sets'] })
      return navigate('/yourSets')
    },
    onError: ({ response }) => {
      handleError(response.data.message)
    },
  })
}

export default useDeleteSet
