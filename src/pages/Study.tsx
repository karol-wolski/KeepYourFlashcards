import { Navigate, useParams } from 'react-router-dom'
import StudyMode from '../components/StudyMode/StudyMode'
import Layout from '../layouts/Layout'
import useGetStudyCollection from '../hooks/useGetStudyCollection'
import LoaderFullScreen from '../components/LoaderFullScreen/LoaderFullScreen'

const StudyPage = () => {
  const { id = '' } = useParams()
  const { data: collection, isError, isLoading } = useGetStudyCollection(id)
  if (!id || isError) {
    return <Navigate to="/" />
  }

  if (isLoading) {
    return <LoaderFullScreen />
  }

  return (
    <Layout>
      <div className="max-w-[61rem] mx-auto">
        {collection && (
          <StudyMode
            collectionName={collection.name}
            cards={collection.flashcards}
            langFront={collection.frontLang}
            langBack={collection.backLang}
          />
        )}
      </div>
    </Layout>
  )
}

export default StudyPage
