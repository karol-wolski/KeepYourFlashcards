import { memo } from 'react'

const Footer = memo(() => {
  return (
    <footer className="bg-primary text-[1.6rem] text-textPrimary text-center p-[1.6rem]">
      <a
        href="https://github.com/karol-wolski/KeepYourFlashcards"
        className="text-[1.4rem]"
      >
        KeepYourFlashcards
      </a>
    </footer>
  )
})

export default Footer
