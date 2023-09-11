import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { HandleMsg } from '../ts/types/HandleMsg'
import { UpdateSetFn } from '../api/cardsApi'
import queryClient from '../api/queryClient'
import { Sets } from '../ts/types/Sets'

const useUpdateSet = (handleError: HandleMsg) => {
  const navigate = useNavigate()
  return useMutation({
    mutationFn: UpdateSetFn,
    onSuccess: ({ data }) => {
      queryClient.setQueryData<Sets[]>(['sets'], (oldSets) => {
        if (oldSets) {
          const array = oldSets.map((elem) => {
            if (elem._id === data._id) {
              return {
                ...elem,
                ...data,
              }
            }
            return elem
          })
          return array
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

export default useUpdateSet
