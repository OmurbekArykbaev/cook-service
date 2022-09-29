import { Outlet } from "react-router-dom"
import { Header, Footer } from "../components"

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
