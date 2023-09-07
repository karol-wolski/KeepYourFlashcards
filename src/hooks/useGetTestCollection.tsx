import { useQuery } from '@tanstack/react-query'
import { GetTest } from '../api/cardsApi'
import { QuizCollection } from '../ts/types/QuizCollection'

const useGetTestCollection = (id: string) => {
  return useQuery<QuizCollection>({
    queryKey: ['study', { id }],
    queryFn: () => GetTest(id),
    enabled: !!id,
  })
}

export default useGetTestCollection
