import Navigation from '../components/Navigation/Navigation'

type Props = {
  children: string | JSX.Element | JSX.Element[] | React.ReactNode
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <Navigation />
      <div className="max-w-[123.2rem] mx-auto my-[5rem] px-[1.6rem]">
        {children}
      </div>
    </>
  )
}

export default Layout
