import { useQuery } from '@tanstack/react-query'
import { GetNumberDaysInRow } from '../api/statsApi'

const useGetNumLearningDaysInRow = () => {
  return useQuery<number>({
    queryKey: ['learningDaysInRow'],
    queryFn: () => GetNumberDaysInRow(),
  })
}

export default useGetNumLearningDaysInRow
