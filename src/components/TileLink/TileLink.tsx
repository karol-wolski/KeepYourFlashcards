import { Link } from 'react-router-dom'

interface Props {
  title: string
  href: string
  isIconVisible: boolean
}

const TileLink = ({ title, href, isIconVisible }: Props) => {
  return (
    <Link
      to={href}
      className="bg-secondary hover:bg-secondaryHover text-primary p-[1.6rem] flex justify-between min-h-[18.8rem] w-full"
    >
      <div className="flex justify-between flex-col w-full">
        <h3 className="font-bold text-[1.6rem]">{title}</h3>
        <div className="flex justify-end items-center">
          {isIconVisible ? (
            <i
              className="fa-solid fa-right-long text-[1.6rem]"
              title="Right long arrow"
            />
          ) : (
            ''
          )}
        </div>
      </div>
    </Link>
  )
}

export default TileLink
