interface IDescWithIcon {
  title: string
  desc: string
  iconClass: string
}

const DescWithIcon = ({ title, desc, iconClass }: IDescWithIcon) => {
  return (
    <div className="grid md:grid-cols-[1fr_11fr] items-center gap-[3rem] md:flex-row">
      <div className="flex justify-center items-center md:w-[7rem]">
        <i className={`text-[6rem] text-secondary ${iconClass}`} />
      </div>
      <div className="flex flex-col justify-center items-center gap-[0.8rem] md:items-start">
        <h3 className="text-[2.4rem]">{title}</h3>
        <p className="text-[1.6rem] font-[300] leading-[1.5]">{desc}</p>
      </div>
    </div>
  )
}

export default DescWithIcon
