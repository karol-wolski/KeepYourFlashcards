import LoginForm from '../components/LoginForm/LoginForm'
import LayoutWithImage from '../layouts/LayoutWithImage'
import { Login } from '../ts/types/Login'

const LoginPage = () => {
  const onSubmit = (data: Login) => console.log(data)

  return (
    <LayoutWithImage title="Login">
      <LoginForm onSubmit={onSubmit} />
    </LayoutWithImage>
  )
}

export default LoginPage
