import { useRef, useEffect, KeyboardEvent } from 'react'
import Card from '../Card/Card'

interface Props {
  front: string
  back: string
}

const CardFlip = ({ front, back }: Props) => {
  const cardRef = useRef<HTMLDivElement>(null)

  const flipCard = () => cardRef.current?.classList.toggle('is-flipped')

  const onKeyUp = (event: KeyboardEvent) => {
    if (event.key === 'Enter') flipCard()
  }

  useEffect(() => {
    const removeIsFlippedCard = () =>
      cardRef.current?.classList.remove('is-flipped')

    removeIsFlippedCard()
  }, [front, back])

  return (
    <div
      ref={cardRef}
      onClick={flipCard}
      onKeyDown={onKeyUp}
      role="none"
      className="relative cursor-pointer card min-h-[25rem]"
      style={{
        transformStyle: 'preserve-3d',
        transformOrigin: 'center right',
        transition: 'transform 1s',
      }}
      tabIndex={-1}
    >
      <div
        className="absolute w-[100%]"
        style={{ backfaceVisibility: 'hidden' }}
      >
        <Card side="QUESTION" text={front} />
      </div>
      <div
        className="absolute w-[100%]"
        style={{
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
        }}
      >
        <Card side="ANSWER" text={back} />
      </div>
    </div>
  )
}

export default CardFlip
