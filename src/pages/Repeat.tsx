import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import RepeatMode from '../components/RepeatMode/RepeatMode'
import Layout from '../layouts/Layout'
import randomNumber from '../utils/randomNumber'
import Button from '../components/Button/Button'
import { Card } from '../ts/types/Card'
import { StudyCollection } from '../ts/types/StudyCollection'
import { GetStudy } from '../api/cardsApi'

const RepeatPage = () => {
  const { id } = useParams()
  const {
    data: collection,
    isError,
    isLoading,
  } = useQuery<StudyCollection>({
    queryKey: ['study', { id }],
    queryFn: () => GetStudy(id || ''),
  })

  const [cards, setCards] = useState<Card[]>(collection?.flashcards || [])
  const [currentCard, setCurrentCard] = useState<Card>()

  useEffect(() => {
    setCurrentCard(cards[0])
  }, [cards])

  if (!id || isError) {
    return <Navigate to="/" />
  }

  if (isLoading) {
    return <p>Loading...</p>
  }
  const nextQuestion = () => {
    const randomNum = randomNumber(0, cards.length)
    setCurrentCard(cards[randomNum])
  }
  const handleResult = (prop: string) => {
    if (prop === 'great' && currentCard) {
      const filterArray = cards.filter((card) => card.id !== currentCard.id)
      setCards(filterArray)
    }
    nextQuestion()
  }

  return (
    <Layout>
      <div className="max-w-[60rem] m-auto">
        {cards.length !== 0 && currentCard ? (
          <RepeatMode
            collectionName={collection.name}
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
              onClick={() => setCards(collection.flashcards)}
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
