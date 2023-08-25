import { createContext, useState, useMemo } from 'react'
import { Outlet } from 'react-router-dom'
import isAuth from '../utils/isAuth'

export type IAuthContext = {
  isLoggedIn: boolean
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext = createContext<IAuthContext | null>(null)

const AuthProvider = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(isAuth())
  const value = useMemo(() => ({ isLoggedIn, setIsLoggedIn }), [isLoggedIn])
  return (
    <AuthContext.Provider value={value}>
      <Outlet />
    </AuthContext.Provider>
  )
}

export default AuthProvider
