import DescWithIcon from '../DescWithIcon/DescWithIcon'

const AboutApp = () => {
  return (
    <section className="max-w-[123.2rem] mx-auto my-[5rem] px-[1.6rem]">
      <h2 className="text-[4rem] mb-[2rem] text-center">
        What is Keep Your Flashcards?
      </h2>
      <p className="text-[1.8rem] font-[300] mb-[5rem] max-w-[60rem] m-auto leading-[1.75]">
        Keep Your Flashcards is an application that gives you the opportunity to
        expand your knowledge using virtual flashcards. The application provides
        four learning modes: learn, repeat, test, match.
      </p>
      <div className="grid md:grid-cols-2 gap-[5rem] max-w-[90rem] m-auto">
        <DescWithIcon
          title="Study"
          iconClass="fa-solid fa-book-open"
          desc="Mode allows you to view the list of cards. In this mode you can
                see both sides of the card or just one side and turn the card
                over to see the back."
        />
        <DescWithIcon
          title="Repeat"
          iconClass="fa-solid fa-chalkboard"
          desc="In this mode you only see the question and you have to answer
                it. Next, you can compare your answer with the correct answer."
        />
        <DescWithIcon
          title="Test"
          iconClass="fa-solid fa-file"
          desc="In this mode you are given 10 random questions, selected from a
                list of all your cards in the set. Each question has 4 answer
                but only one is correct."
        />
        <DescWithIcon
          title="Matching"
          iconClass="fa-solid fa-clone"
          desc="In this mode you have randomly placed questions and answers.
                Your task is to properly match the question with the answer."
        />
      </div>
    </section>
  )
}

export default AboutApp
