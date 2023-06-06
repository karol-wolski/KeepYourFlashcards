import { Link } from 'react-router-dom'

interface Props {
  collectionName: string
  numOfItems: number
  link: string
}
const SingleSetItem = ({ collectionName, numOfItems, link }: Props) => {
  return (
    <Link
      to={link}
      className="bg-blue-950 py-2 px-4 text-white min-h-[10rem] rounded-lg flex justify-between hover:bg-blue-900"
    >
      <div className="flex flex-col justify-between">
        <p className="font-bold">{collectionName}</p>
        <p className="text-xs">
          Cards: <span className="font-bold">{numOfItems}</span>
        </p>
      </div>
    </Link>
  )
}

export default SingleSetItem
