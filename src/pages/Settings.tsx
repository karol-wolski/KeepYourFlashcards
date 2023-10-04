import { useEffect } from 'react'
import EditUserPasswordForm from '../components/EditUserPasswordForm/EditUserPasswordForm'
import useEditUserPassword from '../hooks/useEditUserPassword'
import Layout from '../layouts/Layout'
import { EditUserPassword } from '../ts/types/EditUserPassword'
import { Profile } from '../ts/types/Profile'
import useMessage from '../hooks/useMessage'
import useUpdateUser from '../hooks/useUpdateUser'
import useGetUser from '../hooks/useGetUser'
import EditUserForm from '../components/EditUserForm/EditUserForm'
import EditUserWeeklyGoalForm from '../components/EditUserWeeklyGoal/EditUserWeeklyGoal'
import useUpdateWeeklyGoal from '../hooks/useUpdateWeeklyGoal'
import { WeeklyGoal } from '../ts/types/WeeklyGoal'
import useGetWeeklyGoal from '../hooks/useGetWeeklyGoal'

const SettingsPage = () => {
  const [successPasswordMsg, setSuccessPasswordMsg, clearSuccessPasswordMsg] =
    useMessage()
  const [errorPasswordMsg, setErrorPasswordMsg, clearErrorPasswordMsg] =
    useMessage()
  const [successUserMsg, setSuccessUserMsg, clearSuccessUserMsg] = useMessage()
  const [errorUserMsg, setErrorUserMsg, clearErrorUserMsg] = useMessage()
  const [successWeeklyGoalMsg, setSuccessWeeklyGoalMsg, clearWeeklyGoalMsg] =
    useMessage()
  const [errorWeeklyGoalMsg, setErrorWeeklyGoalMsg, clearErrorWeeklyGoalMsg] =
    useMessage()

  const { data: user, isFetched } = useGetUser()
  const { data: weeklyGoalData, isFetched: isFetchedWeeklyGoal } =
    useGetWeeklyGoal()

  const {
    mutate: mutatePassword,
    isLoading: isLoadingEditPassword,
    isSuccess: isSuccessEditPassword,
  } = useEditUserPassword(setErrorPasswordMsg, setSuccessPasswordMsg)

  const { mutate: mutateUser, isLoading: isLoadingUser } = useUpdateUser(
    setErrorUserMsg,
    setSuccessUserMsg
  )

  const { mutate: mutateWeeklyGoal, isLoading: isLoadingWeeklyGoal } =
    useUpdateWeeklyGoal(setErrorWeeklyGoalMsg, setSuccessWeeklyGoalMsg)

  const onSubmitNewPassword = (data: EditUserPassword) => {
    clearErrorPasswordMsg()
    clearSuccessPasswordMsg()
    mutatePassword({
      password: data.password,
      newPassword: data.newPassword,
    })
  }

  const onSubmitUser = (data: Profile) => {
    clearErrorUserMsg()
    clearSuccessUserMsg()
    mutateUser({
      username: data.username,
      email: data.email,
    })
  }

  const onSubmitWeeklyGoal = (data: WeeklyGoal) => {
    clearErrorWeeklyGoalMsg()
    clearWeeklyGoalMsg()
    mutateWeeklyGoal({
      time: data.time,
      repetitions: data.repetitions,
    })
  }

  useEffect(() => {
    setTimeout(() => clearSuccessPasswordMsg(), 2000)
  }, [successPasswordMsg, clearSuccessPasswordMsg])

  useEffect(() => {
    setTimeout(() => clearSuccessUserMsg(), 2000)
  }, [successUserMsg, clearSuccessUserMsg])

  useEffect(() => {
    setTimeout(() => clearWeeklyGoalMsg(), 2000)
  }, [successWeeklyGoalMsg, clearWeeklyGoalMsg])

  return (
    <Layout>
      <h2 className="text-[2rem] mb-[1.6rem]">Settings</h2>
      <div className="mb-[1.6rem]">
        <h3 className="text-[1.8rem] mb-[1.6rem]">Profile</h3>
        {isFetched && (
          <EditUserForm
            onSubmit={onSubmitUser}
            isLoading={isLoadingUser}
            error={errorUserMsg}
            defaultData={user}
          />
        )}

        <p className="text-[1.6rem]">{successUserMsg}</p>
      </div>

      <div className="mb-[1.6rem]">
        <h3 className="text-[1.8rem] mb-[1.6rem]">Change password</h3>
        <EditUserPasswordForm
          onSubmit={onSubmitNewPassword}
          isLoading={isLoadingEditPassword}
          error={errorPasswordMsg}
          isSuccess={isSuccessEditPassword}
        />
        <p className="text-[1.6rem]">{successPasswordMsg}</p>
      </div>

      <div className="mb-[1.6rem]">
        <h3 className="text-[1.8rem] mb-[1.6rem]">Set weekly goals</h3>
        {isFetchedWeeklyGoal && (
          <EditUserWeeklyGoalForm
            onSubmit={onSubmitWeeklyGoal}
            isLoading={isLoadingWeeklyGoal}
            error={errorPasswordMsg}
            isSuccess={isSuccessEditPassword}
            defaultData={weeklyGoalData}
          />
        )}
        <p className="text-[1.6rem]">{successWeeklyGoalMsg}</p>
      </div>
    </Layout>
  )
}

export default SettingsPage
