import axios from 'axios'
import { getFromLocalStorage } from '../utils/localStorage'
import { EditUserPassword } from '../ts/types/EditUserPassword'

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
  console.log(response)
  return response.data
}
