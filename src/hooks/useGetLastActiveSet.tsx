import { useQuery } from '@tanstack/react-query'
import { Sets } from '../ts/types/Sets'
import { GetLastActiveSet } from '../api/cardsApi'

const useGetLastActiveSet = () => {
  return useQuery<Sets>({
    queryKey: ['lastActiveSet'],
    queryFn: () => GetLastActiveSet(),
    refetchOnMount: true,
  })
}

export default useGetLastActiveSet
