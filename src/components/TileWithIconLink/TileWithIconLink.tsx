import { Link } from 'react-router-dom'

interface Props {
  title: string
  href: string
  iconClass: string
  variant: 'primary' | 'secondary'
}

const TileWithIconLink = ({
  title,
  href,
  iconClass,
  variant = 'primary',
}: Props) => {
  let variantClass

  if (variant === 'primary')
    variantClass = {
      bg: 'bg-primary hover:bg-primaryHover',
      icon: 'text-secondary',
      text: 'text-textPrimary',
    }
  if (variant === 'secondary')
    variantClass = {
      bg: 'bg-secondary hover:bg-secondaryHover',
      icon: 'text-primary',
      text: 'text-primary',
    }
  return (
    <Link
      to={href}
      className={`p-[1.6rem] flex flex-col items-center justify-center min-h-[18.8rem] w-full relative ${variantClass?.bg}`}
    >
      <i className={`text-[7rem] ${variantClass?.icon}  ${iconClass}`} />
      <p
        className={`font-bold text-[1.6rem] absolute bottom-[1.6rem] ${variantClass?.text}`}
      >
        {title}
      </p>
    </Link>
  )
}

export default TileWithIconLink
