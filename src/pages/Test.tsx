import TestMode from '../components/TestMode/TestMode'

const TestPage = () => {
  const collection = {
    name: 'English phrases',
    quiz: [
      {
        id: '001',
        question: 'What is the capital of Poland?',
        answers: [
          { text: 'Berlin', isCorrect: false },
          { text: 'Madrid', isCorrect: false },
          { text: 'Warsaw', isCorrect: true },
          { text: 'Rome', isCorrect: false },
        ],
      },
      {
        id: '002',
        question: 'What it the most popular sport in Poland?',
        answers: [
          { text: 'Ski jumping', isCorrect: false },
          { text: 'Valleyball', isCorrect: false },
          { text: 'Formula One', isCorrect: false },
          { text: 'Football', isCorrect: true },
        ],
      },
    ],
  }

  return (
    <div className="max-w-[60rem] m-auto">
      <TestMode collection={collection} />
    </div>
  )
}

export default TestPage
