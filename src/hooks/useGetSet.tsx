import { useQuery } from '@tanstack/react-query'
import { GetSet } from '../api/cardsApi'
import { Set } from '../ts/interfaces/Set'

const useGetSet = (id: string) => {
  return useQuery<Set>({
    queryKey: ['set', { id }],
    queryFn: () => GetSet(id),
    enabled: !!id,
    refetchOnMount: true,
  })
}

export default useGetSet
