import { useQuery } from '@tanstack/react-query'
import { GetSets } from '../api/cardsApi'
import { Sets } from '../ts/types/Sets'

const useGetSets = () => {
  return useQuery<Sets[]>({
    queryKey: ['sets'],
    queryFn: () => GetSets(),
  })
}

export default useGetSets
