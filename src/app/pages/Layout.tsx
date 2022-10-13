import { Outlet } from "react-router-dom"
import { Header, Footer, Toast, PushUpOrder } from "../components"

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Toast />
      <PushUpOrder />
    </>
  )
}

export default Layout
