import { Link } from 'react-router-dom'

interface Props {
  title: string
  href: string
  iconClass: string
  lastItem?: boolean
}

const LinkWithBgAndIcon = ({ title, href, iconClass, lastItem }: Props) => {
  return (
    <Link
      to={href}
      className={`grid grid-cols-[3rem_7rem] gap-[1.6rem] bg-primaryHover group-hover/parent:bg-primary text-[1.6rem] px-[1.6rem] py-[0.6rem] group ${
        !lastItem ? 'mb-[1.6rem]' : ''
      }`}
    >
      <i
        className={`text-[2.5rem] text-secondary group-hover:text-secondaryHover ${iconClass}`}
      />
      {title}
    </Link>
  )
}

export default LinkWithBgAndIcon
