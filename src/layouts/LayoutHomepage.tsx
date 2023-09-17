import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navigation/Navigation'

type Props = {
  children: string | JSX.Element | JSX.Element[] | React.ReactNode
}

const LayoutHomepage: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}

export default LayoutHomepage
