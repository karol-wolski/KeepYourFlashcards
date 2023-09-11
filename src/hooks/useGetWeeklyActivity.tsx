import { useQuery } from '@tanstack/react-query'
import { GetWeeklyActivity } from '../api/statsApi'

const useGetWeeklyActivity = () => {
  return useQuery<[]>({
    queryKey: ['weeklyActivity'],
    queryFn: () => GetWeeklyActivity(),
  })
}

export default useGetWeeklyActivity
