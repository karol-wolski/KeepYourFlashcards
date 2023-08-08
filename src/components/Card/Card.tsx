interface Props {
  side?: 'QUESTION' | 'ANSWER'
  text?: string
  children?: React.ReactElement | string | JSX.Element
  isSideTextVisible?: boolean
}

const Card = ({ text, side, children, isSideTextVisible = true }: Props) => {
  let style
  if (side === 'QUESTION')
    style = {
      container: 'bg-primaryHover',
      text: 'text-textPrimary',
    }
  if (side === 'ANSWER')
    style = {
      container: 'bg-secondaryHover',
      text: 'text-primary',
    }
  return (
    <div
      className={`py-2 px-4 min-h-[25rem] flex justify-between font-oswald ${style?.container}`}
    >
      <div className={`flex flex-col justify-between w-full ${style?.text}`}>
        {children}
        <p className="h-full w-full flex justify-center items-center text-[1.8rem] leading-[3rem] font-regular px-[1.6rem]">
          {text}
        </p>
        {isSideTextVisible && (
          <p className="text-[1.2rem] font-light mb-[1.6rem] ml-[1.6rem]">
            {side}
          </p>
        )}
      </div>
    </div>
  )
}

export default Card
