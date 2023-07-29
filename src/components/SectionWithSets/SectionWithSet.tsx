import Section from '../Section/Section'
import Set from '../Sets/Set'
import TileLink from '../TileLink/TileLink'

interface Props {
  title: string
}

const SectionWithSet = ({ title }: Props) => {
  const array = [
    {
      id: '1',
      title: 'English phrases',
      items: 39,
    },
    {
      id: '2',
      title: 'Cooking words',
      items: 15,
    },
  ]
  return (
    <Section title={title}>
      <div className="grid gap-[1.6rem] sm:grid-cols-3 mb-[3.2rem]">
        {array.map((item) => (
          <Set
            key={item.id}
            href={`/${item.id}`}
            title={item.title}
            numOfItems={item.items}
          />
        ))}
        <TileLink href="/" title="See more" isIconVisible />
      </div>
    </Section>
  )
}

export default SectionWithSet
