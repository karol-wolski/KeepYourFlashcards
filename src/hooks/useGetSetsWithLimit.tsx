import { useQuery } from '@tanstack/react-query'
import { GetSets } from '../api/cardsApi'
import { Sets } from '../ts/types/Sets'

const useGetSetsWithLimit = (limit?: number) => {
  return useQuery<Sets[]>({
    queryKey: ['sets', { limit }],
    queryFn: () => GetSets(limit),
  })
}

export default useGetSetsWithLimit
