import ForgotPasswordForm from '../components/ForgotPasswordForm/ForgotPasswordForm'
import LayoutWithImage from '../layouts/LayoutWithImage'
import { ForgotPassword } from '../ts/types/ForgotPassword'

const ForgotPasswordPage = () => {
  const onSubmit = (data: ForgotPassword) => console.log(data)

  return (
    <LayoutWithImage title="Forgot Password">
      <ForgotPasswordForm onSubmit={onSubmit} />
    </LayoutWithImage>
  )
}

export default ForgotPasswordPage
