import SingleDayActivity from '../SingleDayActivity/SingleDayActivity'

interface Props {
  activityArray: {
    day: number
    dayName: string
    status: number
  }[]
}

const WeeklyActivity = ({ activityArray }: Props) => {
  return (
    <div className="bg-primary text-textPrimary p-[1.6rem] flex flex-col justify-center min-h-[18.8rem] w-full">
      <div className="grid grid-cols-7 gap-[1.6rem] mb-[2.1rem]">
        {activityArray.map((item) => (
          <SingleDayActivity
            key={item.day}
            dayName={item.dayName.toLocaleUpperCase()}
            day={item.day}
            status={item.status}
          />
        ))}
      </div>
      <div className="flex text-[1.4rem] font-bold uppercase">
        <p className="mr-[1.6rem]">
          <i className="fa-solid text-[1rem] fa-check text-secondary mr-[0.8rem]" />
          Login
        </p>
        <p>
          <i className="fa-solid text-[1rem] fa-check-double text-secondary mr-[0.8rem]" />
          Login & Study
        </p>
      </div>
    </div>
  )
}

export default WeeklyActivity
