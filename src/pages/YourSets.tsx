import { useQuery } from '@tanstack/react-query'
import SectionWithSet from '../components/SectionWithSets/SectionWithSet'
import Layout from '../layouts/Layout'
import { GetSets } from '../api/cardsApi'
import { Sets } from '../ts/types/Sets'

const YourSetsPage = () => {
  const { data = [], isLoading } = useQuery<Sets[]>({
    queryKey: ['sets'],
    queryFn: () => GetSets(),
    enabled: true,
  })

  if (isLoading) {
    return <p className="text-[8rem]">Loading...</p>
  }

  return (
    <Layout>
      <SectionWithSet title="Your sets" array={data} isVisibleSeeMore={false} />
    </Layout>
  )
}

export default YourSetsPage
