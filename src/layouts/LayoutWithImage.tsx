import { Link } from 'react-router-dom'
import NotFoundImage from '../assets/notFound.jpg'
import WomanWithNotebookImage from '../assets/womanWithNoteBook.jpg'

type Props = {
  children: string | JSX.Element | JSX.Element[]
  isNotFound?: boolean
}

const LayoutWithImage = ({ children, isNotFound }: Props) => {
  const image = isNotFound ? NotFoundImage : WomanWithNotebookImage
  return (
    <div className="flex items-center md:h-screen overflow-clip h-screen">
      <div
        className="bg-no-repeat bg-center bg-cover w-1/2 h-full max-md:hidden"
        style={{ backgroundImage: `url(${image})` }}
      >
        <Link to="/" className="text-white mx-12 my-4 inline-block">
          FlashCards
        </Link>
      </div>
      <div className="bg-amber-200 h-full w-1/2 max-md:w-full flex flex-col items-center justify-center max-md:overflow-x-scroll">
        {children}
      </div>
    </div>
  )
}

export default LayoutWithImage
