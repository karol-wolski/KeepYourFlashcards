import axios from 'axios'
import { Login } from '../ts/types/Login'

export const authApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    'Content-type': 'application/json',
  },
})

export const loginUserFn = async (user: Login) => {
  const response = await authApi.post('auth/login', user)
  return response.data
}
