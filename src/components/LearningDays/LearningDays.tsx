interface Props {
  numOfDays: number
}
const LearningDays = ({ numOfDays }: Props) => {
  return (
    <div className="bg-primaryHover font-oswald p-[2.8rem] min-h-[18.8rem] lg:h-[23.9rem] flex flex-col justify-center align-center">
      <p className="text-textPrimary text-[2.8rem] lg:text-[3.2rem] text-center">
        Learning days in a row
      </p>
      <span className="text-secondary text-[4.8rem] text-center block">
        {numOfDays}
      </span>
    </div>
  )
}

export default LearningDays
