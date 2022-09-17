import React, { FC } from "react"
import { useAppSelector } from "../../hooks/rtkHooks"

interface IButtonProps {
  title: string
  onClickHandler: () => void
  activeFocus: boolean
}

const Button: FC<IButtonProps> = ({ title, onClickHandler, activeFocus }) => {
  return (
    <button
      className={`btn-category ${activeFocus ? "shadow-btn-active" : ""}`}
      onClick={onClickHandler}
    >
      {title}
    </button>
  )
}

export default Button
