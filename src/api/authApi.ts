import axios from 'axios'
import { Login } from '../ts/types/Login'
import { Register } from '../ts/types/Register'
import { ForgotPassword } from '../ts/types/ForgotPassword'
import { ResetPassword } from '../ts/types/ResetPassword'

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

export const signUpUserFn = async (user: Register) => {
  const response = await authApi.post('auth/register', user)
  return response.data
}

export const forgotUserPasswordFn = async (password: ForgotPassword) => {
  const response = await authApi.patch('user/forgotPassword', password)
  return response.data
}

export const resetPasswordFn = async (data: ResetPassword) => {
  const response = await authApi.patch('user/resetPassword', data)
  return response.data
}
