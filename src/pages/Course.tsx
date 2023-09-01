import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import SectionWithSet from '../components/SectionWithSets/SectionWithSet'
import StudyModes from '../components/StudyModes/StudyModes'
import Layout from '../layouts/Layout'
import { Sets } from '../ts/types/Sets'
import { GetSetName, GetSets } from '../api/cardsApi'

const CoursePage = () => {
  const { id } = useParams()
  const { data: name } = useQuery<string>({
    queryKey: ['setName', { id }],
    queryFn: () => GetSetName(id),
  })

  const { data: sets = [] } = useQuery<Sets[]>({
    queryKey: ['sets', { limit: 2 }],
    queryFn: () => GetSets(2),
  })

  return (
    <Layout>
      <div className="max-w-[61rem] mx-auto">
        <h2 className="text-[1.6rem] mb-[1.6rem] font-bold">{name}</h2>
        <StudyModes href="" css="mb-[5rem]" />
      </div>
      <SectionWithSet title="Your sets" array={sets} />
    </Layout>
  )
}

export default CoursePage
