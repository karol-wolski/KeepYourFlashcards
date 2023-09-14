import { useParams } from 'react-router-dom'
import SectionWithSet from '../components/SectionWithSets/SectionWithSet'
import StudyModes from '../components/StudyModes/StudyModes'
import Layout from '../layouts/Layout'
import useGetSetsWithLimit from '../hooks/useGetSetsWithLimit'
import useGetSetName from '../hooks/useGetSetName'
import LoaderFullScreen from '../components/LoaderFullScreen/LoaderFullScreen'

const CoursePage = () => {
  const { id } = useParams()
  const { data: name, isLoading: isLoadingSetName } = useGetSetName()
  const { data: sets = [], isLoading: isLoadingSets } = useGetSetsWithLimit(2)

  const isAllLoaded = isLoadingSetName && isLoadingSets

  if (isAllLoaded) {
    return <LoaderFullScreen />
  }

  return (
    <Layout>
      <div className="max-w-[61rem] mx-auto">
        <h2 className="text-[1.6rem] mb-[1.6rem] font-bold">{name}</h2>
        <StudyModes href={`/course/${id}`} css="mb-[5rem]" />
      </div>
      <SectionWithSet title="Your sets" array={sets} />
    </Layout>
  )
}

export default CoursePage
