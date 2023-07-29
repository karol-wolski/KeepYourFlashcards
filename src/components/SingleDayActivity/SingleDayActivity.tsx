interface Props {
  day: number
  dayName: string
  status: number
}

const SingleDayActivity = ({ day, dayName, status }: Props) => {
  let icon
  if (status === 0) icon = 'fa-check-double text-accent'
  if (status === 1) icon = 'fa-check text-secondary'
  if (status === 2) icon = 'fa-check-double text-secondary'

  const today = new Date().getDate()
  const isBold = today === day
  return (
    <div className="flex flex-col justify-center items-center gap-[0.8rem]">
      <p className={`text-[1.4rem] ${isBold ? 'font-bold' : 'font-regular'}`}>
        {dayName}
      </p>
      <p className={`text-[1.2rem] ${isBold ? 'font-bold' : 'font-regular'}`}>
        {day}
      </p>
      <i className={`fa-solid text-[1.3rem] ${icon}`} />
    </div>
  )
}

export default SingleDayActivity
