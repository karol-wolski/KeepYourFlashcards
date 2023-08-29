import axios from 'axios'
import { CreateSet } from '../ts/interfaces/Set'
import { getFromLocalStorage } from '../utils/localStorage'

export const cardsApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `${getFromLocalStorage('token')}`,
  },
})

export const CreteSetFn = async (set: CreateSet) => {
  const response = await cardsApi.post('flashcards', set)
  return response.data
}
