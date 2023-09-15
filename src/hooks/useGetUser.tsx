import { useQuery } from '@tanstack/react-query'
import { Profile } from '../ts/types/Profile'
import { GetUserFn } from '../api/userApi'

const useGetUser = () => {
  return useQuery<Profile>({
    queryKey: ['user'],
    queryFn: () => GetUserFn(),
  })
}

export default useGetUser
