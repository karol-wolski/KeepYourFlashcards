import { useState, useRef } from 'react'
import Button from '../Button/Button'
import Card from '../Card/Card'
import { Card as CardType } from '../../ts/types/Card'

interface Props {
  card: CardType
  collectionName: string
  isLastCard: boolean
  handleResult: (result: string) => void
}

const RepeatMode = ({
  card,
  collectionName,
  isLastCard,
  handleResult,
}: Props) => {
  const divRef = useRef<HTMLDivElement>(null)
  const [isBtnVisible, setIsBtnVisible] = useState(true)
  const [isLevelBtnVisible, setIsLevelBtnVisible] = useState(false)
  const [answer, setAnswer] = useState('')

  const checkAnswer = () => {
    setAnswer(card.answer)
    if (divRef.current) divRef.current.contentEditable = 'false'
    setIsBtnVisible(false)
    setIsLevelBtnVisible(true)
  }

  const clear = () => {
    setIsBtnVisible(true)
    setIsLevelBtnVisible(false)
    setAnswer('')
    if (divRef.current) {
      divRef.current.contentEditable = 'true'
      divRef.current.textContent = ''
    }
  }

  const result = (status: string) => {
    clear()
    handleResult(status)
  }

  return (
    <div className="flex flex-col gap-[1.6rem] [&>*:last-child]:self-center">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="font-bold text-[1.6rem]">
          {collectionName} - Repeat mode
        </h2>
        {isLastCard && (
          <p className="text-[1.6rem] text-danger">Last question</p>
        )}
      </div>
      <Card side="QUESTION" text={card.question} />
      <Card side="ANSWER" text={answer}>
        <div
          ref={divRef}
          contentEditable="true"
          data-testid="editableDiv"
          data-text="Place for your answer"
          className="[&:empty]:before:content-[attr(data-text)] bg-amber-200 text-center resize-none text-[1.4rem] min-h-[10rem] border-secondary border-[0.2rem] mt-[1.6rem] p-[1.6rem]"
        />
      </Card>
      {isBtnVisible && (
        <Button type="button" variant="primary" onClick={checkAnswer}>
          Check your answer
        </Button>
      )}
      {isLevelBtnVisible && (
        <div className="flex gap-[1.6rem]">
          <Button type="button" variant="danger" onClick={() => result('poor')}>
            Poor
          </Button>
          <Button
            type="button"
            variant="success"
            onClick={() => result('great')}
          >
            Great
          </Button>
        </div>
      )}
    </div>
  )
}

export default RepeatMode
