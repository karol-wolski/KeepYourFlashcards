import SectionWithSet from '../components/SectionWithSets/SectionWithSet'
import Layout from '../layouts/Layout'
import useGetSets from '../hooks/useGetSets'
import LoaderFullScreen from '../components/LoaderFullScreen/LoaderFullScreen'

const YourSetsPage = () => {
  const { data = [], isLoading } = useGetSets()

  if (isLoading) {
    return <LoaderFullScreen />
  }

  return (
    <Layout>
      <SectionWithSet title="Your sets" array={data} isVisibleSeeMore={false} />
    </Layout>
  )
}

export default YourSetsPage
