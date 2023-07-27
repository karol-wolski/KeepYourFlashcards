import { Link } from 'react-router-dom'
import LinkWithBgAndIcon from '../LinkWithBgAndIcon/LinkWithBgAndIcon'

interface Props {
  title: string
  numOfItems: number
  href: string
  isActiveLinks?: boolean
}

const Set = ({ title, numOfItems, href, isActiveLinks }: Props) => {
  return (
    <div
      className={`group/parent grid ${
        isActiveLinks ? 'grid-cols-[10fr_2fr]' : ''
      }`}
    >
      <Link
        to={href}
        className="bg-primary group-hover/parent:bg-primaryHover text-textPrimary p-[1.6rem] flex justify-between min-h-[18.8rem] w-full"
        aria-label={title}
      >
        <div className="flex justify-between flex-col w-full">
          <h3 className="font-bold text-[1.6rem]">{title}</h3>
          <span className="font-bold text-[1.4rem]">
            {numOfItems} {numOfItems === 1 ? 'card' : 'cards'}
          </span>
        </div>
      </Link>
      {isActiveLinks && (
        <div className="bg-primary group-hover/parent:bg-primaryHover text-textPrimary p-[1.6rem] flex justify-between min-h-[18.8rem] w-full">
          <div className="ml-[1.6rem] flex flex-col justify-center">
            <LinkWithBgAndIcon
              title="Study"
              href="/study"
              iconClass="fa-solid fa-book-open"
            />
            <LinkWithBgAndIcon
              title="Repeat"
              href="/repeat"
              iconClass="fa-solid fa-chalkboard"
            />
            <LinkWithBgAndIcon
              title="Test"
              href="/test"
              iconClass="fa-solid fa-file"
              lastItem
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Set
