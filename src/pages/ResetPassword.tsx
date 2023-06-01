import ResetPasswordForm from '../components/ResetPasswordForm/ResetPasswordForm'
import LayoutWithImage from '../layouts/LayoutWithImage'
import { ResetPassword } from '../ts/types/ResetPassword'

const ResetPasswordPage = () => {
  const onSubmit = (data: ResetPassword) => console.log(data)

  return (
    <LayoutWithImage>
      <h2 className="text-3xl font-bold mb-8">Create new password</h2>
      <ResetPasswordForm onSubmit={onSubmit} />
    </LayoutWithImage>
  )
}

export default ResetPasswordPage
