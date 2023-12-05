import speechSynthesis from '../../utils/speechSynthesis'

interface Props {
  side?: 'QUESTION' | 'ANSWER'
  text?: string
  children?: React.ReactElement | string | JSX.Element
  isSideTextVisible?: boolean
  isActiveSpeaker?: boolean
  cardLang?: string
}

const Card = ({
  text,
  side,
  children,
  isSideTextVisible = true,
  isActiveSpeaker = false,
  cardLang,
}: Props) => {
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
        <div className="flex justify-between items-center mb-[1.6rem] mx-[1.6rem]">
          {isSideTextVisible && (
            <p className="text-[1.2rem] font-light">{side}</p>
          )}
          {isActiveSpeaker && text && cardLang && (
            <button
              aria-label="Read text aloud"
              type="button"
              onClick={() => speechSynthesis(text, cardLang)}
              className="text-[1.6rem]"
              title="Read text aloud"
            >
              <i className="fa-solid fa-volume-high" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
