import { useQuery } from '@tanstack/react-query'
import { GetMatching } from '../api/cardsApi'
import { StudyCollection } from '../ts/types/StudyCollection'

const useGetMatchingCollection = (id: string) => {
  return useQuery<StudyCollection>({
    queryKey: ['match', { id }],
    queryFn: () => GetMatching(id),
    enabled: !!id,
  })
}

export default useGetMatchingCollection
