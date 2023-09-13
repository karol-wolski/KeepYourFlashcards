import { Navigate, useParams } from 'react-router-dom'
import TestMode from '../components/TestMode/TestMode'
import Layout from '../layouts/Layout'
import useGetTestCollection from '../hooks/useGetTestCollection'
import LoaderFullScreen from '../components/LoaderFullScreen/LoaderFullScreen'

const TestPage = () => {
  const { id = '' } = useParams()
  const { data: collection, isError, isLoading } = useGetTestCollection(id)

  if (!id || isError) {
    return <Navigate to="/" />
  }

  if (isLoading) {
    return <LoaderFullScreen />
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
