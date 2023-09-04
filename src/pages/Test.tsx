import { useQuery } from '@tanstack/react-query'
import { Navigate, useParams } from 'react-router-dom'
import { GetTest } from '../api/cardsApi'
import TestMode from '../components/TestMode/TestMode'
import { QuizCollection } from '../ts/types/QuizCollection'
import Layout from '../layouts/Layout'

const TestPage = () => {
  const { id } = useParams()
  const {
    data: collection,
    isError,
    isLoading,
  } = useQuery<QuizCollection>({
    queryKey: ['study', { id }],
    queryFn: () => GetTest(id || ''),
  })

  if (!id || isError) {
    return <Navigate to="/" />
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <Layout>
      <div className="max-w-[60rem] m-auto">
        <TestMode collection={collection} />
      </div>
    </Layout>
  )
}

export default TestPage
