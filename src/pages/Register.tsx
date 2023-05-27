import RegisterForm from '../components/RegisterForm/RegisterForm'
import LayoutWithImage from '../layouts/LayoutWithImage'
import { Register as RegisterType } from '../ts/types/Register'

const Register = () => {
  const onSubmit = (data: RegisterType) => console.log(data)

  return (
    <LayoutWithImage>
      <h2 className="text-3xl font-bold mb-8">Sign up</h2>
      <RegisterForm onSubmit={onSubmit} />
    </LayoutWithImage>
  )
}

export default Register
