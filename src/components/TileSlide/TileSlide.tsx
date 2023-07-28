interface Props {
  text: string
  iconClass: string
  isVisible: boolean
}

const TileSlide = ({ iconClass, text, isVisible }: Props) => {
  return (
    <div
      className={`${
        isVisible ? 'flex' : 'hidden'
      } flex-col justify-center items-center gap-[1.6rem]`}
    >
      <i className={`fa-solid ${iconClass} text-primary text-[6.5rem]`} />
      <p className="text-[1.6rem] text-primary">{text}</p>
    </div>
  )
}

export default TileSlide
