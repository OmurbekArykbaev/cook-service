import React, { FC } from "react"

type Props = {
  setFilter: React.Dispatch<
    React.SetStateAction<"all" | "delivered" | "rejected">
  >
  name: string
  category: "all" | "delivered" | "rejected"
}

const ButtonCategory: FC<Props> = ({ setFilter, name, category }) => {
  return (
    <button
      onClick={() => setFilter(category)}
      className="w-full btn shadow-btn-active mb-3 sm:mb-0 sm:w-auto"
    >
      {name}
    </button>
  )
}

export default ButtonCategory
