import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext, IAuthContext } from '../../context/AuthContext'

const ProtectedRoute = () => {
  const { isLoggedIn } = useContext(AuthContext) as IAuthContext
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute
