import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

const Navigation = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)

  const toggleMenu = () => setIsOpenMobileMenu((prevState) => !prevState)
  return (
    <nav
      className={`h-[5.6rem] static ${
        isOpenMobileMenu ? 'h-screen fixed' : ''
      } bg-primary text-textPrimary top-0 left-0 right-0 z-10`}
    >
      <div className="max-w-[123.2rem] mx-auto flex max-md:flex-col md:justify-between gap-[1.6rem] items-center h-full px-[1.6rem]">
        <div className="flex gap-[1.6rem] max-md:w-full max-md:mt-[0.8rem] justify-between items-center md:[&>*:last-child]:hidden">
          <Link to="/" className="text-[1.6rem] font-bold text-secondary">
            FlashCards
          </Link>
          <Button type="button" variant="primary" onClick={toggleMenu}>
            {isOpenMobileMenu ? (
              <i className="fa-solid fa-xmark text-secondary text-[1.6rem]" />
            ) : (
              <i className="fa-solid fa-bars text-secondary text-[1.6rem]" />
            )}
          </Button>
        </div>
        <div
          className={`flex ${
            !isOpenMobileMenu ? 'max-md:hidden' : ''
          } justify-between max-md:flex-col gap-[1.6rem] w-full`}
        >
          <ul className="flex gap-[1.6rem] items-center [&>li>a]:text-[1.6rem] [&>*>a:hover]:text-secondary mx-[1.6rem] max-md:flex-col">
            <li>
              <Link to="/profile">Dashboard</Link>
            </li>
            <li>
              <Link to="/yourSets">Sets</Link>
            </li>
          </ul>

          <ul className="flex gap-[1.6rem] items-center [&>li>*]:text-[1.6rem] [&>*>a:hover]:text-secondary mx-[1.6rem]  max-md:flex-col">
            <li className="hidden md:block">
              <i className="fa-solid fa-fire text-secondary" /> <span>30</span>
            </li>
            <li>
              <Link to="/settings">Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
