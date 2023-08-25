import localStorageMock from '../../tests/mocks/LocalStorageMock'
import isAuth from './isAuth'
import { addToLocalStorage } from './localStorage'

Object.defineProperty(window, 'localStorage', { value: localStorageMock })

describe('isAuth', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  test('should return true', () => {
    addToLocalStorage('token', 'h54dergf')
    expect(isAuth()).toEqual(true)
  })

  test('should return false', () => {
    expect(isAuth()).toEqual(false)
  })
})
