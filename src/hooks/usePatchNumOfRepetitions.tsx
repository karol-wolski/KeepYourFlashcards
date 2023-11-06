import { useMutation } from '@tanstack/react-query'
import { PatchNumOfRepetitions } from '../api/statsApi'
import queryClient from '../api/queryClient'

const usePatchNumOfRepetitions = () => {
  return useMutation({
    mutationFn: PatchNumOfRepetitions,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['records'] }),
    onError: ({ response }) => {
      throw new Error(response)
    },
  })
}

export default usePatchNumOfRepetitions
