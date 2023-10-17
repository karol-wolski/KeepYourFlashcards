import { useQuery } from '@tanstack/react-query'
import { GetRecords } from '../api/statsApi'
import { Records } from '../ts/types/Records'

const useGetRecords = () => {
  return useQuery<Records>({
    queryKey: ['records'],
    queryFn: () => GetRecords(),
    refetchOnMount: true,
  })
}

export default useGetRecords
