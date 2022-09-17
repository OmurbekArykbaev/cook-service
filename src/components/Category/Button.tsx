import { FC } from "react"
import { useAppDispatch } from "../../hooks/rtkHooks"
import { filterByCategory } from "../../pages/Home/allFoodSlice"

interface IButtonProps {
  title: string
  activeFocus: boolean
  category: string
}

const Button: FC<IButtonProps> = ({ title, category, activeFocus }) => {
  const dispatch = useAppDispatch()

  return (
    <button
      className={`btn-category ${activeFocus ? "shadow-btn-active" : ""}`}
      onClick={() => dispatch(filterByCategory(category))}
    >
      {title}
    </button>
  )
}

export default Button
