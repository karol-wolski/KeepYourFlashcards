import { lazy } from 'react'

export const RegisterPage = lazy(() => import('../../pages/Register'))
export const LoginPage = lazy(() => import('../../pages/Login'))
export const ForgotPasswordPage = lazy(
  () => import('../../pages/ForgotPassword')
)
export const ResetPasswordPage = lazy(() => import('../../pages/ResetPassword'))
export const NotFoundPage = lazy(() => import('../../pages/NotFound'))
export const ProfilePage = lazy(() => import('../../pages/Profile'))
export const YourSetsPage = lazy(() => import('../../pages/YourSets'))
export const CoursePage = lazy(() => import('../../pages/Course'))
export const StudyPage = lazy(() => import('../../pages/Study'))
export const RepeatPage = lazy(() => import('../../pages/Repeat'))
export const TestPage = lazy(() => import('../../pages/Test'))
export const MatchingPage = lazy(() => import('../../pages/Matching'))
export const AddSetPage = lazy(() => import('../../pages/AddSet'))
