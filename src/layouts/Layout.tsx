type Props = {
  children: string | JSX.Element | JSX.Element[]
}

const Layout = ({ children }: Props) => {
  return <div className="mx-[1.6rem]">{children}</div>
}

export default Layout
