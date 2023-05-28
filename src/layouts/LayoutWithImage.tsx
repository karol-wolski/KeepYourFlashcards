type Props = {
  children: string | JSX.Element | JSX.Element[]
}

const LayoutWithImage = ({ children }: Props) => {
  return (
    <div className="flex items-center md:h-screen overflow-clip h-screen">
      <div className="bg-[url('./assets/womanWithNoteBook.jpg')] bg-no-repeat bg-center bg-cover w-1/2 h-full max-md:hidden">
        <p className="text-white px-12 py-4">FlashCards</p>
      </div>
      <div className="bg-amber-200 h-full w-1/2 max-md:w-full flex flex-col items-center justify-center max-md:overflow-x-scroll">
        {children}
      </div>
    </div>
  )
}

export default LayoutWithImage
