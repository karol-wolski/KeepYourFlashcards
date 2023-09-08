import { useParams } from 'react-router-dom'
import SectionWithSet from '../components/SectionWithSets/SectionWithSet'
import StudyModes from '../components/StudyModes/StudyModes'
import Layout from '../layouts/Layout'
import useGetSetsWithLimit from '../hooks/useGetSetsWithLimit'
import useGetSetName from '../hooks/useGetSetName'

const CoursePage = () => {
  const { id } = useParams()
  const { data: name } = useGetSetName()
  const { data: sets = [] } = useGetSetsWithLimit(2)

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
