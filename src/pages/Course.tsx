import { useQuery } from '@tanstack/react-query'
import SectionWithSet from '../components/SectionWithSets/SectionWithSet'
import StudyModes from '../components/StudyModes/StudyModes'
import Layout from '../layouts/Layout'
import { Sets } from '../ts/types/Sets'
import { GetSets } from '../api/cardsApi'

const CoursePage = () => {
  const { data = [] } = useQuery<Sets[]>({
    queryKey: ['sets', { limit: 2 }],
    queryFn: () => GetSets(2),
  })

  return (
    <Layout>
      <StudyModes href="" css="mb-[5rem]" />
      <SectionWithSet title="Your sets" array={data} />
    </Layout>
  )
}

export default CoursePage
