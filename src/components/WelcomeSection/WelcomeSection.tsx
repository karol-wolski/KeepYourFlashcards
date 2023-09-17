import { memo } from 'react'
import { Link } from 'react-router-dom'

const WelcomeSection = memo(() => {
  return (
    <section
      className={`bg-[url("/src/assets/bg-section.jpg")] bg-no-repeat bg-cover bg-center h-[calc(100vh-5.6rem)] flex justify-end items-end`}
    >
      <div className="w-[100%] p-[3.2rem] m-[1.6rem] text-textPrimary bg-primary md:max-w-[40%] landscape:max-w-[40%]">
        <h2 className="text-[2rem] mb-[1.6rem] md:text-[2.4rem] md:mb-[2.4rem]">
          Experience a new era of learning
        </h2>
        <p className="text-[1.6rem] mb-[2.8rem] font-[300]">
          Keep Your Flashcards is more than flashcards: it is the global
          learning platform. Join our community.
        </p>
        <Link
          to="/register"
          className="py-[0.8rem] px-[1.6rem] text-[1.6rem] rounded-none bg-secondary hover:bg-secondaryHover text-textSecondary"
        >
          Sign up now
        </Link>
      </div>
    </section>
  )
})

export default WelcomeSection
