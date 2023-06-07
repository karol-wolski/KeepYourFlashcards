import { Link } from 'react-router-dom'
import LayoutWithImage from '../layouts/LayoutWithImage'

const NotFoundPage = () => {
  return (
    <LayoutWithImage isNotFound>
      <h2 className="text-3xl font-bold mb-8">Oops! Page not found</h2>
      <p>
        Please check the URL or{' '}
        <Link to="/" className="font-bold text-blue-700">
          click here
        </Link>{' '}
        to be redirected to the homepage.
      </p>
    </LayoutWithImage>
  )
}

export default NotFoundPage
