import StudyMode from '../components/StudyMode/StudyMode'
import Layout from '../layouts/Layout'

const StudyPage = () => {
  const collection = {
    name: 'English phrases',
    flashcards: [
      {
        id: '1',
        question: 'Test',
        answer: 'Test 2',
      },
      {
        id: '2',
        question: 'Hello',
        answer: 'Czesc',
      },
    ],
  }
  return (
    <Layout>
      <div className="max-w-[61rem] mx-auto">
        <StudyMode
          collectionName={collection.name}
          cards={collection.flashcards}
        />
      </div>
    </Layout>
  )
}

export default StudyPage
