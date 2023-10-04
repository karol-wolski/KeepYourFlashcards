import axios from 'axios'
import { getFromLocalStorage } from '../utils/localStorage'

export const cardsApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `${getFromLocalStorage('token')}`,
  },
})

export const GetNumberDaysInRow = async () => {
  const response = await cardsApi.get('flashcardsStats/daysInRow')
  return response.data
}

export const GetWeeklyActivity = async () => {
  const response = await cardsApi.get('flashcardsStats/weeklyActivity')
  return response.data
}

export const GetWeeklyGoal = async () => {
  const response = await cardsApi.get('flashcardsStats/yourWeeklyGoal')
  return response.data
}
