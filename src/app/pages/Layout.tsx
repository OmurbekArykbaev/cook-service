import { Outlet } from "react-router-dom"
import { Footer, Toast, PushUpOrder, Header } from "../components"

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
