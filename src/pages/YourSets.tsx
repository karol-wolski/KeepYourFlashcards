import SectionWithSet from '../components/SectionWithSets/SectionWithSet'
import Layout from '../layouts/Layout'
import useGetSets from '../hooks/useGetSets'

const YourSetsPage = () => {
  const { data = [], isLoading } = useGetSets()

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
