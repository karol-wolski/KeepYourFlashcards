import LoginForm from '../components/LoginForm/LoginForm'
import LayoutWithImage from '../layouts/LayoutWithImage'
import { Login } from '../ts/types/Login'

const LoginPage = () => {
  const onSubmit = (data: Login) => console.log(data)

  return (
    <LayoutWithImage>
      <h2 className="text-3xl font-bold mb-8">Login</h2>
      <LoginForm onSubmit={onSubmit} />
    </LayoutWithImage>
  )
}

export default LoginPage
