import React, { FC } from "react"

type Props = {
  setFilter: React.Dispatch<
    React.SetStateAction<"all" | "delivered" | "rejected">
  >
  name: string
  category: "all" | "delivered" | "rejected"
  isActive: boolean
}

const ButtonCategory: FC<Props> = ({ setFilter, name, category, isActive }) => {
  return (
    <button
      onClick={() => setFilter(category)}
      className={`w-full btn mb-3 sm:mb-0 sm:w-auto ${
        isActive ? "shadow-btn-active" : ""
      }`}
    >
      {name}
    </button>
  )
}

export default ButtonCategory
