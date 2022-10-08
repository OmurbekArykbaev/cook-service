import { Outlet } from "react-router-dom"
import { Header, Footer, Toast } from "../components"

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Toast />
    </>
  )
}

export default Layout
