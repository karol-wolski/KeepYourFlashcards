import LearningDays from '../components/LearningDays/LearningDays'
import Records from '../components/Records/Records'
import Section from '../components/Section/Section'
import SectionWithSet from '../components/SectionWithSets/SectionWithSet'
import Set from '../components/Sets/Set'
import TileSlider from '../components/TileSlider/TileSlider'
import WeeklyActivity from '../components/WeeklyActivity/WeeklyActivity'
import Layout from '../layouts/Layout'

const ProfilePage = () => {
  const slides = [
    {
      id: '1',
      iconClass: 'fa-clock',
      text: '45 mins',
    },
    {
      id: '2',
      iconClass: 'fa-chalkboard',
      text: '100 repetitions',
    },
  ]

  const weeklyActivity = [
    { day: 23, dayName: 'Sun', status: 1 },
    { day: 24, dayName: 'Mon', status: 2 },
    { day: 25, dayName: 'Tue', status: 0 },
    { day: 26, dayName: 'Wed', status: 0 },
    { day: 27, dayName: 'Thu', status: 0 },
    { day: 28, dayName: 'Fri', status: 0 },
    { day: 29, dayName: 'Sat', status: 0 },
  ]

  return (
    <Layout>
      <div className="grid gap-[1.6rem] sm:grid-cols-2 lg:grid-cols-[4fr_8fr] items-end mb-[3.2rem]">
        <LearningDays numOfDays={30} />
        <Section title="Last set">
          <Set href="/" title="English phrases" numOfItems={47} isActiveLinks />
        </Section>
      </div>

      <SectionWithSet title="Your set" />

      <div className="grid gap-[1.6rem] sm:grid-cols-2 lg:grid-cols-[3fr_2fr_7fr]">
        <Section title="Activity">
          <WeeklyActivity activityArray={weeklyActivity} />
        </Section>
        <Section title="Your Weekly Goals">
          <TileSlider slides={slides} />
        </Section>
        <div className="sm:col-span-2 lg:col-start-3">
          <Section title="Records">
            <Records
              numOfDaysInRow={60}
              NumOfMinutesWeek={300}
              numOfRepetitions={299}
            />
          </Section>
        </div>
      </div>
    </Layout>
  )
}

export default ProfilePage
