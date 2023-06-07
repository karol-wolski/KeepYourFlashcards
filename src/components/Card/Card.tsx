interface Props {
  text: string
  side: 'FRONT' | 'BACK'
}

const Card = ({ text, side }: Props) => {
  return (
    <div className="bg-blue-950 py-2 px-4 text-white min-h-[10rem] rounded-lg flex justify-between">
      <div className="flex flex-col justify-between w-full">
        <p className="font-bold h-full w-full flex justify-center items-center">
          {text}
        </p>
        {side && <p className="text-xs text-blue-500 font-bold">{side}</p>}
      </div>
    </div>
  )
}

export default Card
