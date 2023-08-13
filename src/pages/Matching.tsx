import MatchingMode from '../components/MatchingMode/MatchingMode'
import Layout from '../layouts/Layout'

const MatchingPage = () => {
  const response = {
    collectionName: 'General test',
    cards: [
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
      {
        id: '3',
        question: 'What is the national food of Italy?',
        answer: 'Spaghetti bolognese',
      },
      {
        id: '4',
        question: 'What is the capital of Germany?',
        answer: 'Berlin',
      },
      {
        id: '5',
        question: 'What is the capital of Italy?',
        answer: 'Rome',
      },
      {
        id: '6',
        question: 'What is the highest mountain peak in Europe?',
        answer: 'Mont Blanc',
      },
    ],
  }

  return (
    <Layout>
      <div className="max-w-[61rem] mx-auto">
        <h2 className="font-bold text-[1.6rem] mb-[5rem]">
          {response.collectionName} - Matching mode
        </h2>
        <MatchingMode cards={response.cards} />
      </div>
    </Layout>
  )
}

export default MatchingPage
