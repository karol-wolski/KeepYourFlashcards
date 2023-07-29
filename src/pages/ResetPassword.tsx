import ResetPasswordForm from '../components/ResetPasswordForm/ResetPasswordForm'
import LayoutWithImage from '../layouts/LayoutWithImage'
import { ResetPassword } from '../ts/types/ResetPassword'

const ResetPasswordPage = () => {
  const onSubmit = (data: ResetPassword) => console.log(data)

  return (
    <LayoutWithImage title="Create new password">
      <ResetPasswordForm onSubmit={onSubmit} />
    </LayoutWithImage>
  )
}

export default ResetPasswordPage
