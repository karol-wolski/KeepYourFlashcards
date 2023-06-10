import { useState } from 'react'
import CardBothSide from '../CardBothSide/CardBothSide'
import CardFlip from '../CardFlipEffect/CardFlipEffect'
import Button from '../Button/Button'

type Card = {
  id: string
  question: string
  answer: string
}

type Mode = 'BOTH_SIDE' | 'FLIP_SIDE'

interface Props {
  cards: Card[]
  collectionName: string
}

const StudyMode = ({ cards, collectionName }: Props) => {
  const [mode, setMode] = useState<Mode>('FLIP_SIDE')
  const [currentCard, setCurrentCard] = useState(0)

  const prevCard = () => setCurrentCard((prev) => prev - 1)
  const nextCard = () => setCurrentCard((prev) => prev + 1)

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value === 'FLIP_SIDE' ? 'FLIP_SIDE' : 'BOTH_SIDE'
    setMode(value)
  }

  return (
    <>
      <div className="mb-4 flex justify-between items-center">
        <h2 className="font-bold text-[1.6rem]">
          {collectionName} - Study mode
        </h2>
        <select onChange={handleChange} className="text-[1.6rem]">
          <option className="text-[1.6rem]" value="FLIP_SIDE">
            Flip Side
          </option>
          <option className="text-[1.6rem]" value="BOTH_SIDE">
            Both Side
          </option>
        </select>
      </div>
      <div className="overflow-hidden">
        {mode === 'FLIP_SIDE' ? (
          <CardFlip
            front={cards[currentCard].question}
            back={cards[currentCard].answer}
            key={cards[currentCard].id}
          />
        ) : (
          <CardBothSide
            question={cards[currentCard].question}
            answer={cards[currentCard].answer}
            key={cards[currentCard].id}
          />
        )}
      </div>
      <div className="flex justify-center items-center mt-4">
        <Button
          onClick={prevCard}
          type="button"
          disabled={currentCard + 1 === 1}
          aria-label="previous card"
        >
          Prev
        </Button>
        <p className="mx-4 text-[1.6rem]">
          {currentCard + 1} / {cards.length}
        </p>
        <Button
          onClick={nextCard}
          type="button"
          disabled={currentCard + 1 === cards.length}
          aria-label="Next card"
        >
          Next
        </Button>
      </div>
    </>
  )
}

export default StudyMode
