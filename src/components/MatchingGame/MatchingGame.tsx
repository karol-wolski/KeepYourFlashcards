import { useEffect, useState, useRef } from 'react'
import { Card } from '../../ts/types/Card'
import sortArrayRandomly from '../../utils/sortArrayRandomly'

interface Props {
  cards: Card[]
  handleWin: () => void
}

type SeparatedCard = {
  id: string
  value: string
  pair_id: string
}

const MatchingGame = ({ cards, handleWin }: Props) => {
  const [cardsArray, setCardsArray] = useState<SeparatedCard[]>([])
  const [prevCardId, setPrevCardId] = useState<{
    id: string
    pair_id: string
    refIdx: number | null
  }>({
    id: '',
    pair_id: '',
    refIdx: null,
  })
  const [correctAnswerCounter, setCorrectAnswerCounter] = useState(0)
  const itemsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
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

    const dividedArray = divideCard()
    const arr = sortArrayRandomly<SeparatedCard>(dividedArray)
    setCardsArray(arr)
  }, [cards])

  useEffect(() => {
    if (correctAnswerCounter === cards.length) handleWin()
  }, [cards.length, correctAnswerCounter, handleWin])

  const handleBtnClick = (id: string, pair_id: string, refIdx: number) => {
    if (prevCardId.refIdx === null) {
      setPrevCardId({ id, pair_id, refIdx })
      itemsRef.current[refIdx].classList.add('bg-secondary')
      return
    }

    if (prevCardId.pair_id === pair_id) {
      if (prevCardId.id !== id) {
        setCorrectAnswerCounter((prevState) => prevState + 1)
        itemsRef.current[refIdx].classList.add('bg-success')
        itemsRef.current[prevCardId.refIdx].classList.add('bg-success')
      } else {
        itemsRef.current[refIdx].classList.remove('bg-secondary')
      }
      setPrevCardId({ id: '', pair_id: '', refIdx: null })
    } else if (prevCardId.pair_id !== pair_id) {
      itemsRef.current[prevCardId.refIdx].classList.remove('bg-secondary')
      itemsRef.current[prevCardId.refIdx].classList.remove('bg-primaryHover')
      itemsRef.current[refIdx].classList.remove('bg-primaryHover')
      itemsRef.current[refIdx].classList.add('bg-dangerHover')
      itemsRef.current[prevCardId.refIdx].classList.add('bg-dangerHover')

      setTimeout(() => {
        itemsRef.current[refIdx].classList.remove('bg-dangerHover')
        itemsRef.current[refIdx].classList.add('bg-primaryHover')
        if (typeof prevCardId.refIdx === 'number') {
          itemsRef.current[prevCardId.refIdx].classList.remove('bg-dangerHover')
          itemsRef.current[prevCardId.refIdx].classList.add('bg-primaryHover')
        }
      }, 2000)

      setPrevCardId({ id: '', pair_id: '', refIdx: null })
    }
  }

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el)
    }
  }

  return (
    <div className="grid grid-cols-2 gap-[1.6rem]">
      {cardsArray.map((card, idx) => (
        <div
          role="none"
          key={card.id}
          className="p-[0.8rem] min-h-[10rem] bg-primaryHover text-textPrimary text-[1.6rem] flex items-center justify-center cursor-pointer"
          onClick={() => handleBtnClick(card.id, card.pair_id, idx)}
          ref={addToRefs}
        >
          {card.value}
        </div>
      ))}
    </div>
  )
}

export default MatchingGame
