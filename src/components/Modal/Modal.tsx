import Button from '../Button/Button'

interface Props {
  title: string
  desc: string
  buttonSubmitName: string
  handleCancel: () => void
  handleSubmit: () => void
}

const Modal = ({
  title,
  desc,
  buttonSubmitName,
  handleCancel,
  handleSubmit,
}: Props) => {
  return (
    <div className="bg-accent h-screen w-screen fixed top-0 left-0 flex justify-center items-center">
      <div className="w-full md:w-[60rem] min-h-[20rem] bg-textPrimary m-[1.6rem] p-[1.6rem] flex flex-col justify-between">
        <div className="flex flex-col gap-[1.6rem]">
          <p className="text-[2rem] md:text-[2.6rem] border-b-[0.4rem]">
            {title}
          </p>
          <p className="text-[1.6rem] md:text-[1.8rem]">{desc}</p>
        </div>

        <div className="flex justify-end gap-[1.6rem]">
          <Button type="submit" variant="warn" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="button" variant="danger" onClick={handleSubmit}>
            {buttonSubmitName}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Modal
