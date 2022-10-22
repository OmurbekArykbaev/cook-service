import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Footer, Toast, PushUpOrder, Header } from "../components"

const Layout = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

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
