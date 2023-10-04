import { useQuery } from '@tanstack/react-query'
import { GetWeeklyGoal } from '../api/statsApi'

const useGetWeeklyGoal = () => {
  return useQuery({
    queryKey: ['weeklyGoal'],
    queryFn: () => GetWeeklyGoal(),
  })
}

export default useGetWeeklyGoal
