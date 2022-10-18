import { useAppSelector } from "../../hooks"
import React, { FC, ReactNode } from "react"

interface IWrapperProps {
  children: ReactNode
  nameClass?: string
}

const Wrapper: FC<IWrapperProps> = ({ children, nameClass }) => {
  const data = useAppSelector((state) => state.modalOrder.isOpen)

  return (
    <main
      className={`container wrapper ${
        data ? "blur-lg overflow-y-hidden" : ""
      } ${nameClass}`}
    >
      {children}
    </main>
  )
}

export default Wrapper
