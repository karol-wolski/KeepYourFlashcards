import { useState } from 'react'
import MatchingGame from '../MatchingGame/MatchingGame'
import Button from '../Button/Button'
import { Card } from '../../ts/types/Card'

interface Props {
  cards: Card[]
}

const MatchingMode = ({ cards }: Props) => {
  const [isGameEnd, setIsGameEnd] = useState(false)
  return (
    <div>
      {!isGameEnd ? (
        <MatchingGame cards={cards} handleWin={() => setIsGameEnd(true)} />
      ) : (
        <div className="h-[30rem] flex flex-col gap-[1.6rem] justify-center items-center border-[2px] border-primary">
          <p className="text-[1.6rem]">You have done all the repetitions</p>
          <Button
            type="button"
            variant="primary"
            onClick={() => setIsGameEnd(false)}
          >
            Play again
          </Button>
        </div>
      )}
    </div>
  )
}

export default MatchingMode
