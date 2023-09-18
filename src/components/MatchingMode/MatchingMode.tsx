import { useState } from 'react'
import MatchingGame from '../MatchingGame/MatchingGame'
import Button from '../Button/Button'
import { Card } from '../../ts/types/Card'
import sortArrayRandomly from '../../utils/sortArrayRandomly'

interface Props {
  cards: Card[]
  refetch: () => void
}

const MatchingMode = ({ cards, refetch }: Props) => {
  const [isGameEnd, setIsGameEnd] = useState(false)
  const divideCard = () => {
    const questions = cards.map((card) => {
      return {
        id: `q_${card.id}`,
        value: card.question,
        pair_id: card.id,
      }
    })

    const answers = cards.map((card) => {
      return {
        id: `a_${card.id}`,
        value: card.answer,
        pair_id: card.id,
      }
    })

    return [...questions, ...answers]
  }

  const dividedArray = sortArrayRandomly(divideCard())

  const playAgain = () => {
    setIsGameEnd(false)
    refetch()
  }

  return (
    <div>
      {!isGameEnd ? (
        <MatchingGame
          cards={dividedArray}
          handleWin={() => setIsGameEnd(true)}
        />
      ) : (
        <div className="h-[30rem] flex flex-col gap-[1.6rem] justify-center items-center border-[2px] border-primary">
          <p className="text-[1.6rem]">You have done all the repetitions</p>
          <Button type="button" variant="primary" onClick={() => playAgain()}>
            Play again
          </Button>
        </div>
      )}
    </div>
  )
}

export default MatchingMode
