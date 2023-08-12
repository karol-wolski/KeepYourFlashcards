import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import RegisterPage from './pages/Register'
import LoginPage from './pages/Login'
import ForgotPasswordPage from './pages/ForgotPassword'
import ResetPasswordPage from './pages/ResetPassword'
import NotFoundPage from './pages/NotFound'
import ProfilePage from './pages/Profile'
import YourSetsPage from './pages/YourSets'
import CoursePage from './pages/Course'
import StudyPage from './pages/Study'
import RepeatPage from './pages/Repeat'
import TestPage from './pages/Test'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
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
    path: '/resetPassword',
    element: <ResetPasswordPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/yourSets',
    element: <YourSetsPage />,
  },
  {
    path: '/course',
    element: <CoursePage />,
  },
  {
    path: '/study',
    element: <StudyPage />,
  },
  {
    path: '/repeat',
    element: <RepeatPage />,
  },
  {
    path: '/test',
    element: <TestPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
