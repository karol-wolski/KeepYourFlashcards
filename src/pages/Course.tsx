import SectionWithSet from '../components/SectionWithSets/SectionWithSet'
import StudyModes from '../components/StudyModes/StudyModes'
import Layout from '../layouts/Layout'

const CoursePage = () => {
  return (
    <Layout>
      <StudyModes href="/" css="mb-[5rem]" />
      <SectionWithSet title="Your sets" />
    </Layout>
  )
}

export default CoursePage
