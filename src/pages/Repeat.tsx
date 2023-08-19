import { useState } from 'react'
import RepeatMode from '../components/RepeatMode/RepeatMode'
import Layout from '../layouts/Layout'
import randomNumber from '../utils/randomNumber'
import Button from '../components/Button/Button'
import { Card } from '../ts/types/Card'

const RepeatPage = () => {
  const response = [
    {
      id: '1',
      question: 'What is the capital of Poland?',
      answer: 'Warsaw',
    },
    {
      id: '2',
      question: 'What it the most popular sport in Poland?',
      answer: 'Football',
    },
  ]

  const [cards, setCards] = useState<Card[]>(response)
  const [currentCard, setCurrentCard] = useState<Card>(cards[0])

  const nextQuestion = () => {
    const randomNum = randomNumber(0, cards.length)
    setCurrentCard(cards[randomNum])
  }
  const handleResult = (prop: string) => {
    if (prop === 'great') {
      const filterArray = cards.filter((card) => card.id !== currentCard.id)
      setCards(filterArray)
    }
    nextQuestion()
  }

  return (
    <Layout>
      <div className="max-w-[60rem] m-auto">
        {cards.length !== 0 ? (
          <RepeatMode
            collectionName="English phrases"
            card={currentCard}
            handleResult={handleResult}
            isLastCard={cards.length === 1}
          />
        ) : (
          <div className="h-[30rem] flex flex-col gap-[1.6rem] justify-center items-center border-[2px] border-primary">
            <p className="text-[1.6rem]">You have done all the repetitions</p>
            <Button
              type="button"
              variant="primary"
              onClick={() => setCards(response)}
            >
              Start again your reps
            </Button>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default RepeatPage
