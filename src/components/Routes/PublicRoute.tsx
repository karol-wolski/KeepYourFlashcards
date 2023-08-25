import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext, IAuthContext } from '../../context/AuthContext'

const PublicRoute = () => {
  const { isLoggedIn } = useContext(AuthContext) as IAuthContext
  return isLoggedIn ? <Navigate to="/profile" /> : <Outlet />
}

export default PublicRoute
