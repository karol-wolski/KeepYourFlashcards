import { getFromLocalStorage } from './localStorage'

const isAuth = () => !!getFromLocalStorage('token')

export default isAuth
