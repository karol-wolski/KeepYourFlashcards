import { Navigate, useParams } from 'react-router-dom'
import MatchingMode from '../components/MatchingMode/MatchingMode'
import Layout from '../layouts/Layout'
import useGetMatchingCollection from '../hooks/useGetMatchingCollection'
import LoaderFullScreen from '../components/LoaderFullScreen/LoaderFullScreen'

const MatchingPage = () => {
  const { id } = useParams()
  const {
    data: collection,
    isError,
    isLoading,
    refetch,
  } = useGetMatchingCollection(id ?? '')

  if (!id || isError) {
    return <Navigate to="/" />
  }

  if (isLoading) {
    return <LoaderFullScreen />
  }

  return (
    <Layout>
      <div className="max-w-[61rem] mx-auto">
        {!isLoading && (
          <>
            <h2 className="font-bold text-[1.6rem] mb-[5rem]">
              {collection.name} - Matching mode
            </h2>
            <MatchingMode cards={collection?.flashcards} refetch={refetch} />
          </>
        )}
      </div>
    </Layout>
  )
}

export default MatchingPage
