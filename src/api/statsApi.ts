import axios from 'axios'
import { getFromLocalStorage } from '../utils/localStorage'
import { WeeklyGoal } from '../ts/types/WeeklyGoal'
import { NumOfRepetitions } from '../ts/types/Repetitions'

export const statsApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `${getFromLocalStorage('token')}`,
  },
})

export const GetNumberDaysInRow = async () => {
  const response = await statsApi.get('flashcardsStats/daysInRow')
  return response.data
}

export const GetWeeklyActivity = async () => {
  const response = await statsApi.get('flashcardsStats/weeklyActivity')
  return response.data
}

export const GetWeeklyGoal = async () => {
  const response = await statsApi.get('flashcardsStats/yourWeeklyGoal')
  return response.data
}

export const PatchWeeklyGoal = async (data: WeeklyGoal) => {
  const response = await statsApi.patch('flashcardsStats/yourWeeklyGoal', {
    yourWeeklyGoal: data,
  })
  return response.data
}

export const GetRecords = async () => {
  const response = await statsApi.get('flashcardsStats/records')
  return response.data
}

export const PatchNumOfRepetitions = async (data: NumOfRepetitions) => {
  const response = await statsApi.patch(
    'flashcardsStats/dailyRepetitions',
    data
  )
  return response.data
}
