import React, { FC, ReactNode } from "react"

interface IWrapperProps {
  children: ReactNode
  nameClass?: string
}

const Wrapper: FC<IWrapperProps> = ({ children, nameClass }) => {
  return <main className={`container wrapper ${nameClass}`}>{children}</main>
}

export default Wrapper
