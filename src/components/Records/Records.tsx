interface Props {
  numOfDaysInRow: number
  NumOfMinutesWeek: number
  numOfRepetitions: number
}

const Records = ({
  numOfDaysInRow,
  NumOfMinutesWeek,
  numOfRepetitions,
}: Props) => {
  return (
    <div className="bg-primary text-textPrimary p-[1.6rem] flex justify-center gap-[4rem] min-h-[18.8rem] w-full">
      <div className="flex justify-center items-center gap-[3.2rem]">
        <i className="fa-solid text-[7rem] fa-calendar text-secondary" />
        <div>
          <p className="text-[1.6rem] font-bold mb-[0.8rem]">
            {numOfDaysInRow} {numOfDaysInRow === 1 ? 'day' : 'days'}
          </p>
          <p className="text-[1.2rem]">in a row</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-[3.2rem]">
        <i className="fa-solid text-[7rem] fa-clock text-secondary" />
        <div>
          <p className="text-[1.6rem] font-bold mb-[0.8rem]">
            {NumOfMinutesWeek} {NumOfMinutesWeek === 1 ? 'minute' : 'minutes'}
          </p>
          <p className="text-[1.2rem]">of learning week</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-[3.2rem]">
        <i className="fa-solid text-[7rem] fa-chalkboard text-secondary" />
        <div>
          <p className="text-[1.6rem] font-bold mb-[0.8rem]">
            {numOfRepetitions}{' '}
            {numOfRepetitions === 1 ? 'repetition' : 'repetitions'}
          </p>
          <p className="text-[1.2rem]">in a week</p>
        </div>
      </div>
    </div>
  )
}

export default Records
