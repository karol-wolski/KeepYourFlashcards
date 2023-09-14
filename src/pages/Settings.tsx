import { useEffect, useState } from 'react'
import EditUserPasswordForm from '../components/EditUserPasswordForm/EditUserPasswordForm'
import useEditUserPassword from '../hooks/useEditUserPassword'
import Layout from '../layouts/Layout'
import { EditUserPassword } from '../ts/types/EditUserPassword'

const SettingsPage = () => {
  const [successMsg, setSuccessMsg] = useState<string>('')
  const [errorMsg, setErrorMsg] = useState<string>('')
  const setSuccess = (msg: string) => setSuccessMsg(msg)
  const setError = (msg: string) => setErrorMsg(msg)

  const {
    mutate,
    isLoading: isLoadingEditPassword,
    isSuccess,
  } = useEditUserPassword(setError, setSuccess)

  const onSubmitNewPassword = (data: EditUserPassword) => {
    setSuccess('')
    setError('')
    mutate({
      password: data.password,
      newPassword: data.newPassword,
    })
  }

  useEffect(() => {
    setTimeout(() => {
      setSuccessMsg('')
    }, 2000)
  })

  return (
    <Layout>
      <h2 className="text-[2rem] mb-[1.6rem]">Settings</h2>
      <h3 className="text-[1.8rem] mb-[1.6rem]">Profile</h3>

      <h3 className="text-[1.8rem] mb-[1.6rem]">Change password</h3>
      <EditUserPasswordForm
        onSubmit={onSubmitNewPassword}
        isLoading={isLoadingEditPassword}
        error={errorMsg}
        isSuccess={isSuccess}
      />
      <p className="text-[1.6rem]">{successMsg}</p>
    </Layout>
  )
}

export default SettingsPage
