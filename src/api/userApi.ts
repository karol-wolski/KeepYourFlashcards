import axios from 'axios'
import { getFromLocalStorage } from '../utils/localStorage'
import { EditUserPassword } from '../ts/types/EditUserPassword'
import { Profile } from '../ts/types/Profile'

export const cardsApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `${getFromLocalStorage('token')}`,
  },
})

export const UpdateUserPasswordFn = async (passwords: EditUserPassword) => {
  const response = await cardsApi.patch('user/passwordMe', passwords)
  return response.data
}

export const GetUserFn = async () => {
  const response = await cardsApi.get('user/me')
  return response.data.data
}

export const UpdateUserFn = async (data: Profile) => {
  const response = await cardsApi.patch('user/me', data)
  return response.data
}
