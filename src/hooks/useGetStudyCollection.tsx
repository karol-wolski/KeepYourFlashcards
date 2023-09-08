import { useQuery } from '@tanstack/react-query'
import { GetStudy } from '../api/cardsApi'
import { StudyCollection } from '../ts/types/StudyCollection'

const useGetStudyCollection = (id: string) => {
  return useQuery<StudyCollection>({
    queryKey: ['study', { id }],
    queryFn: () => GetStudy(id),
    enabled: !!id,
  })
}

export default useGetStudyCollection
