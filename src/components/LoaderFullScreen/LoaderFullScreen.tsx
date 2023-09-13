import DotLoader from '../DotLoader/DotLoader'

const LoaderFullScreen = () => {
  return (
    <div className="flex justify-center items-center absolute top-0 left-0 h-screen w-full">
      <div className="flex flex-col items-center">
        <p className="text-[2.4rem] mb-[0.8rem]">Keep Your Flashcards</p>
        <p className="text-[2rem] mb-[0.8rem]">
          Your data is being prepared. Wait a moment.
        </p>
        <div role="status" className="flex gap-[1rem]">
          <DotLoader height="[3rem]" width="[3rem]" />
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  )
}

export default LoaderFullScreen
