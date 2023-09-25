import { useState, memo } from 'react'

const reviews = [
  {
    id: '0001',
    author: 'John Doe',
    review:
      'KeepYourFlashcards is a brilliant option for busy people - just a few minutes a day is enough to learn new flashcards. Here you will find various tasks that motivate tests. The application will show you that learning can really be enjoyable!',
  },
  {
    id: '0002',
    author: 'Anna Kowalska',
    review:
      'I tested the KeepYourFlashcards platform and the results exceeded my wildest expectations! I learned anywhere and anytime, adapting learning to my schedule, not the other way around :). This is an ideal solution for working people who want to develop and have little free time.',
  },
  {
    id: '0003',
    author: 'Pavel Kovacić',
    review:
      'I am a student. With the KeepYourFlashcards application, I am able to learn new things for my studies quickly and without stress. I can use the application everywhere, at home, at university, while riding the bus. I recommend to everyone who want to improve their knowledge.',
  },
]

const ReviewsHomepage = memo(() => {
  const [activeReview, setActiveReview] = useState(reviews[0].id)
  const setReview = (review: string) => setActiveReview(review)

  return (
    <section className="flex flex-col items-center p-[5rem]">
      <h2 className="text-[4rem] mb-[4rem] text-center">
        What do people say about our product?
      </h2>
      {reviews.map(({ id, author, review }) => {
        return (
          <div
            key={id}
            className={`max-w-[60rem] min-h-[25rem] ${
              activeReview !== id && 'hidden'
            }`}
          >
            <p className="text-[2.6rem] mb-[2rem]">{author}</p>
            <p className="text-[2.2rem] font-[300] leading-[2]">{review}</p>
          </div>
        )
      })}
      <div className="flex gap-[5rem]">
        {reviews.map(({ id }) => {
          return (
            <button
              key={id}
              onClick={() => setReview(id)}
              className="text-[1.6rem] font-[300]"
            >
              <i
                className={`${
                  id === activeReview ? 'fa-solid' : 'fa-regular'
                } fa-circle text-secondaryHover text-[1.6rem]`}
              />
            </button>
          )
        })}
      </div>
    </section>
  )
})

export default ReviewsHomepage
