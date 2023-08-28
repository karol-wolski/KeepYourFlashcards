import { Sets } from '../../ts/types/Sets'
import Section from '../Section/Section'
import Set from '../Sets/Set'
import TileLink from '../TileLink/TileLink'

interface Props {
  title: string
  isVisibleSeeMore?: boolean
  array: Sets[]
}

const SectionWithSet = ({ title, array, isVisibleSeeMore = true }: Props) => {
  return (
    <Section title={title}>
      <div className="grid gap-[1.6rem] sm:grid-cols-3 mb-[3.2rem]">
        {array.map(({ _id: id, name, numOfCards }) => (
          <Set
            key={id}
            href={`/course/${id}`}
            title={name}
            numOfItems={numOfCards}
          />
        ))}
        {isVisibleSeeMore && (
          <TileLink href="/yourSets" title="See more" isIconVisible />
        )}
      </div>
    </Section>
  )
}

export default SectionWithSet
