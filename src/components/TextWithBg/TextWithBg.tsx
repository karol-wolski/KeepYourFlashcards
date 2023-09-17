interface ITextWithBg {
  text: string
}

const TextWithBg = ({ text }: ITextWithBg) => {
  return (
    <section className="bg-primary flex justify-center items-center py-[7rem]">
      <p className="text-[2.4rem] font-[300] max-w-[50rem] px-[1.6rem] text-center text-secondaryHover leading-[2]">
        {text}
      </p>
    </section>
  )
}

export default TextWithBg
