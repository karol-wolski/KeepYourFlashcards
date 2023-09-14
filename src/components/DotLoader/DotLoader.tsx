interface DotSize {
  width?: string
  height?: string
}

const DotLoader = ({ width = '[1.6rem]', height = '[1.6rem]' }: DotSize) => {
  return (
    <>
      <div
        className={`bg-primary rounded-full animate-pulse circle-one h-${height} w-${width}`}
      />
      <div
        className={`bg-primary rounded-full animate-pulse circle-two h-${height} w-${width}`}
      />
      <div
        className={`bg-primary rounded-full animate-pulse circle-three h-${height} w-${width}`}
      />
    </>
  )
}

export default DotLoader
