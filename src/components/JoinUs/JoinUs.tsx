import { memo } from 'react'
import { Link } from 'react-router-dom'

const JoinUs = memo(() => {
  return (
    <section className="grid md:grid-cols-2">
      <div className="bg-secondaryHover h-[80vh] flex justify-center items-center">
        <div className="m-[1.6rem] flex flex-col gap-[3rem] [&>*:last-child]:self-start">
          <h2 className="text-[3.8rem]">The No. 1 flashcards platform</h2>
          <p className="text-[2.4rem] font-[300]">Join satisfied users</p>
          <Link
            to="/register"
            className="py-[1rem] px-[1.6rem] text-[2rem] rounded-none bg-primary hover:bg-primaryHover text-textPrimary"
          >
            Join us now
          </Link>
        </div>
      </div>
      <div
        className={`bg-[url("/src/assets/women-pencil.jpg")] bg-no-repeat bg-cover bg-center flex justify-end items-end h-[80vh]`}
      />
    </section>
  )
})

export default JoinUs
