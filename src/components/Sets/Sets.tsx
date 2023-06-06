import { useState } from 'react'
import SingleSet from '../SingleSet/SingleSet'

type Set = {
  id: string
  collectionName: string
  numOfItems: number
  link: string
}

interface Props {
  sets: Set[]
}

const SetsFlashCard = ({ sets }: Props) => {
  const [items] = useState(sets)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((item) => (
        <SingleSet
          key={item.id}
          collectionName={item.collectionName}
          numOfItems={item.numOfItems}
          link={item.link}
        />
      ))}
    </div>
  )
}

export default SetsFlashCard
