import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { HandleMsg } from '../ts/types/HandleMsg'
import { CreteSetFn } from '../api/cardsApi'
import queryClient from '../api/queryClient'
import { Sets } from '../ts/types/Sets'

const useAddSet = (handleError: HandleMsg) => {
  const navigate = useNavigate()
  return useMutation({
    mutationFn: CreteSetFn,
    onSuccess: ({ data }) => {
      queryClient.setQueryData<Sets[]>(['sets'], (oldSets) => {
        if (oldSets) {
          return [...oldSets, data]
        }
        return undefined
      })
      queryClient.invalidateQueries({ queryKey: ['sets'] })
      return navigate('/yourSets')
    },
    onError: ({ response }) => {
      handleError(response.data.message)
    },
  })
}

export default useAddSet
