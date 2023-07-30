interface Props {
  title: string
  children: React.ReactElement
}

const Section = ({ title, children }: Props) => {
  return (
    <div className="font-oswald">
      <h2 className="mb-[1.1rem] text-[1.6rem] font-bold">{title}</h2>
      {children}
    </div>
  )
}

export default Section
