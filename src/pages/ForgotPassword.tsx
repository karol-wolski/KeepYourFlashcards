import ForgotPasswordForm from '../components/ForgotPasswordForm/ForgotPasswordForm'
import LayoutWithImage from '../layouts/LayoutWithImage'
import { ForgotPassword } from '../ts/types/ForgotPassword'

const ForgotPasswordPage = () => {
  const onSubmit = (data: ForgotPassword) => console.log(data)

  return (
    <LayoutWithImage>
      <h2 className="text-3xl font-bold mb-8">Forgot Password</h2>
      <ForgotPasswordForm onSubmit={onSubmit} />
    </LayoutWithImage>
  )
}

export default ForgotPasswordPage
