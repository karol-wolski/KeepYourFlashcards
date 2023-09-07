import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { GetSetName } from '../api/cardsApi'

const useGetSetName = () => {
  const { id } = useParams()
  return useQuery<string>({
    queryKey: ['setName', { id }],
    queryFn: () => GetSetName(id),
  })
}

export default useGetSetName
