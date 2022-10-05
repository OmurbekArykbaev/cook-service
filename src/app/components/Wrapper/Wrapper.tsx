import Toast from "../../components/Toast"
import React, { FC, ReactNode } from "react"

interface IWrapperProps {
  children: ReactNode
  nameClass?: string
}

const Wrapper: FC<IWrapperProps> = ({ children, nameClass }) => {
  return (
    <main className={`container wrapper ${nameClass}`}>
      {children}
      <Toast />
    </main>
  )
}

export default Wrapper
