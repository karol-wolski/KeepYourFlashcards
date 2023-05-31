import { useRef, useEffect, KeyboardEvent } from 'react'

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
      className="relative cursor-pointer card rounded-lg min-h-[20rem] bg-sky-900 text-white flex justify-center items-center"
      style={{
        transformStyle: 'preserve-3d',
        transformOrigin: 'center right',
        transition: 'transform 1s',
      }}
      tabIndex={-1}
    >
      <div className="absolute p-8" style={{ backfaceVisibility: 'hidden' }}>
        {front}
      </div>
      <div
        className="absolute p-4"
        style={{
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
        }}
      >
        {back}
      </div>
    </div>
  )
}

export default CardFlip
