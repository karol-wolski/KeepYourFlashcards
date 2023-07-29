import { Link } from 'react-router-dom'
import LayoutWithImage from '../layouts/LayoutWithImage'

const NotFoundPage = () => {
  return (
    <LayoutWithImage title="Oops! Page not found" isNotFound>
      <p className="text-[1.6rem] text-primary">
        Please check the URL or{' '}
        <Link to="/" className="font-bold text-primary text-[1.6rem]">
          click here
        </Link>{' '}
        to be redirected to the homepage.
      </p>
    </LayoutWithImage>
  )
}

export default NotFoundPage
