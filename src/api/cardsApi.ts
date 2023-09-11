import axios from 'axios'
import { Set } from '../ts/interfaces/Set'
import { getFromLocalStorage } from '../utils/localStorage'

export const cardsApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `${getFromLocalStorage('token')}`,
  },
})

export const CreteSetFn = async (set: Set) => {
  const response = await cardsApi.post('flashcards', set)
  return response.data
}

export const UpdateSetFn = async (set: Set) => {
  const response = await cardsApi.patch(`flashcards/${set._id}`, set)
  return response.data
}

export const GetSets = async (limit?: number) => {
  const limitQuery = limit ? `?limit=${limit}` : ''
  const response = await cardsApi.get(`flashcards/me${limitQuery}`)
  return response.data
}

export const GetSet = async (id: string) => {
  const response = await cardsApi.get(`flashcards/${id}`)
  return response.data
}

export const GetSetName = async (id?: string) => {
  const response = await cardsApi.get(`flashcards/course/${id}/setName`)
  return response.data
}

export const GetStudy = async (id: string) => {
  const response = await cardsApi.get(`flashcards/course/${id}/study`)
  return response.data
}

export const GetTest = async (id: string) => {
  const response = await cardsApi.get(`flashcards/course/${id}/test`)
  return response.data
}

export const GetMatching = async (id: string) => {
  const response = await cardsApi.get(`flashcards/course/${id}/match`)
  return response.data
}

export const GetLastActiveSet = async () => {
  const response = await cardsApi.get(`flashcards/course/last`)
  return response.data
}

export const DeleteSetFn = async (id: string) => {
  const response = await cardsApi.delete(`flashcards/${id}`)
  return response.data
}
