import { createBrowserRouter } from 'react-router-dom'
import App from '../../App'
import ProtectedRoute from './ProtectedRoute'
import {
  AddSetPage,
  CoursePage,
  ForgotPasswordPage,
  LoginPage,
  MatchingPage,
  NotFoundPage,
  ProfilePage,
  RegisterPage,
  RepeatPage,
  ResetPasswordPage,
  StudyPage,
  TestPage,
  YourSetsPage,
  ManageSetPage,
  SettingsPage,
} from './LazyImportPages'
import AuthProvider from '../../context/AuthContext'
import PublicRoute from './PublicRoute'

const router = createBrowserRouter([
  {
    element: <AuthProvider />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: '/profile',
            element: <ProfilePage />,
          },
          {
            path: '/yourSets',
            element: <YourSetsPage />,
          },
          {
            path: '/course/:id',
            element: <CoursePage />,
          },
          {
            path: '/course/:id/study',
            element: <StudyPage />,
          },
          {
            path: '/course/:id/repeat',
            element: <RepeatPage />,
          },
          {
            path: '/course/:id/test',
            element: <TestPage />,
          },
          {
            path: '/course/:id/matching',
            element: <MatchingPage />,
          },
          {
            path: 'create-set',
            element: <AddSetPage />,
          },
          {
            path: '/course/:id/manage-set',
            element: <ManageSetPage />,
          },
          {
            path: '/settings',
            element: <SettingsPage />,
          },
        ],
      },
      {
        element: <PublicRoute />,
        children: [
          {
            path: '/register',
            element: <RegisterPage />,
          },
          {
            path: '/login',
            element: <LoginPage />,
          },
          {
            path: '/forgot',
            element: <ForgotPasswordPage />,
          },
          {
            path: '/reset-password',
            element: <ResetPasswordPage />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

export default router
