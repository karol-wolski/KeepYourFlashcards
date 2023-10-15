import { useEffect, useState } from 'react'
import LearningDays from '../components/LearningDays/LearningDays'
import LoaderFullScreen from '../components/LoaderFullScreen/LoaderFullScreen'
import Records from '../components/Records/Records'
import Section from '../components/Section/Section'
import SectionWithSet from '../components/SectionWithSets/SectionWithSet'
import Set from '../components/Sets/Set'
import TileSlider from '../components/TileSlider/TileSlider'
import WeeklyActivity from '../components/WeeklyActivity/WeeklyActivity'
import useGetLastActiveSet from '../hooks/useGetLastActiveSet'
import useGetNumLearningDaysInRow from '../hooks/useGetNumLearningDaysInRow'
import useGetSetsWithLimit from '../hooks/useGetSetsWithLimit'
import useGetWeeklyActivity from '../hooks/useGetWeeklyActivity'
import useGetWeeklyGoal from '../hooks/useGetWeeklyGoal'
import Layout from '../layouts/Layout'
import { WeeklyGoalSlide } from '../ts/types/WeeklyGoalSlide'
import useGetRecords from '../hooks/useGetRecords'

const ProfilePage = () => {
  const { data: sets = [], isLoading: isLoadingSets } = useGetSetsWithLimit(2)
  const { data: lastSet, isLoading: isLoadingLastSet } = useGetLastActiveSet()
  const { data: numDaysInRow, isLoading: isLoadingDaysInRow } =
    useGetNumLearningDaysInRow()
  const { data: weeklyActivity, isLoading: isLoadingWeeklyActivity } =
    useGetWeeklyActivity()
  const { data: weeklyGoal, isLoading: isLoadingWeeklyGoal } =
    useGetWeeklyGoal()
  const [weeklyGoalSlides, setWeeklyGoalSlides] = useState<WeeklyGoalSlide[]>(
    []
  )
  const { data: records, isLoading: isLoadingRecords } = useGetRecords()
  const isAllLoaded =
    isLoadingDaysInRow &&
    isLoadingLastSet &&
    isLoadingSets &&
    isLoadingWeeklyActivity &&
    isLoadingWeeklyGoal &&
    isLoadingRecords

  useEffect(() => {
    if (weeklyGoal)
      setWeeklyGoalSlides([
        {
          id: '1',
          iconClass: 'fa-clock',
          text: `${weeklyGoal.time} mins`,
        },
        {
          id: '2',
          iconClass: 'fa-chalkboard',
          text: `${weeklyGoal.repetitions} repetitions`,
        },
      ])
  }, [weeklyGoal])

  if (isAllLoaded) {
    return <LoaderFullScreen />
  }

  return (
    <Layout>
      <div className="grid gap-[1.6rem] sm:grid-cols-2 lg:grid-cols-[4fr_8fr] items-end mb-[3.2rem]">
        {numDaysInRow && <LearningDays numOfDays={numDaysInRow} />}
        {lastSet && (
          <Section title="Last set">
            <Set
              href={`/course/${lastSet._id}`}
              title={lastSet?.name}
              numOfItems={lastSet?.numOfCards}
              isActiveLinks
            />
          </Section>
        )}
      </div>

      <SectionWithSet title="Your set" array={sets} />

      <div className="grid gap-[1.6rem] sm:grid-cols-2 lg:grid-cols-[3fr_2fr_7fr]">
        <Section title="Activity">
          {weeklyActivity ? (
            <WeeklyActivity activityArray={weeklyActivity} />
          ) : (
            <p className="text-[1.6rem]">We cannot load your statistics</p>
          )}
        </Section>
        {weeklyGoalSlides.length && (
          <Section title="Your Weekly Goals">
            <TileSlider slides={weeklyGoalSlides} />
          </Section>
        )}
        {records && (
          <div className="sm:col-span-2 lg:col-start-3">
            <Section title="Records">
              <Records
                numOfDaysInRow={records?.days || 0}
                NumOfMinutesWeek={records?.weekly.learningTime || 0}
                numOfRepetitions={records?.weekly.repetitions || 0}
              />
            </Section>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default ProfilePage
