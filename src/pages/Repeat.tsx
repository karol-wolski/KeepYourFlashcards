import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import RepeatMode from '../components/RepeatMode/RepeatMode'
import Layout from '../layouts/Layout'
import randomNumber from '../utils/randomNumber'
import Button from '../components/Button/Button'
import { Card } from '../ts/types/Card'
import useGetStudyCollection from '../hooks/useGetStudyCollection'
import LoaderFullScreen from '../components/LoaderFullScreen/LoaderFullScreen'
import usePatchNumOfRepetitions from '../hooks/usePatchNumOfRepetitions'

const RepeatPage = () => {
  const { id = '' } = useParams()
  const { data: collection, isError, isLoading } = useGetStudyCollection(id)
  const { mutate } = usePatchNumOfRepetitions()
  const [cards, setCards] = useState<Card[]>([])
  const [currentCard, setCurrentCard] = useState<Card>()
  const [correctAnswer, setCorrectAnswer] = useState<number>(0)
  useEffect(() => {
    if (collection) setCards(collection.flashcards)
  }, [collection])

  useEffect(() => {
    setCurrentCard(cards[0])
  }, [cards])

  useEffect(() => {
    if (cards.length === 0 || correctAnswer === 5) {
      mutate({ repetitions: correctAnswer })
      setCorrectAnswer(0)
    }
  }, [cards, correctAnswer, mutate])

  if (!id || isError) {
    return <Navigate to="/" />
  }

  if (isLoading) {
    return <LoaderFullScreen />
  }
  const nextQuestion = () => {
    const randomNum = randomNumber(0, cards.length)
    setCurrentCard(cards[randomNum])
  }

  const handleResult = (prop: string) => {
    if (prop === 'great' && currentCard) {
      setCorrectAnswer((prevState) => prevState + 1)
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
