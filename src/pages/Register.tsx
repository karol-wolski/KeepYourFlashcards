import RegisterForm from '../components/RegisterForm/RegisterForm'
import LayoutWithImage from '../layouts/LayoutWithImage'
import { Register as RegisterType } from '../ts/types/Register'

const RegisterPage = () => {
  const onSubmit = (data: RegisterType) => console.log(data)

  return (
    <LayoutWithImage title="Sign up">
      <RegisterForm onSubmit={onSubmit} />
    </LayoutWithImage>
  )
}

export default RegisterPage
