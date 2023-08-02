import { Link } from 'react-router-dom'
import NotFoundImage from '../assets/notFound.jpg'
import WomanWithNotebookImage from '../assets/womanWithNoteBook.jpg'

type Props = {
  children: string | JSX.Element | JSX.Element[]
  title: string
  isNotFound?: boolean
}

const LayoutWithImage = ({ children, title, isNotFound }: Props) => {
  const image = isNotFound ? NotFoundImage : WomanWithNotebookImage
  return (
    <div className="flex items-center md:h-screen overflow-clip h-screen">
      <div
        className="bg-no-repeat bg-center bg-cover w-1/2 h-full max-md:hidden"
        style={{ backgroundImage: `url(${image})` }}
      >
        <Link
          to="/"
          className="text-textPrimary text-[1.6rem] mx-12 my-4 inline-block"
        >
          FlashCards
        </Link>
      </div>
      <div className="bg-amber-200 h-full w-1/2 max-md:w-full flex flex-col items-center justify-center">
        <h2 className="text-[3rem] text-primary font-bold mb-8">{title}</h2>
        {children}
      </div>
    </div>
  )
}

export default LayoutWithImage
