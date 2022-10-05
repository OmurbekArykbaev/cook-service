import { FC } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { filterByCategory } from "../../pages/Home/allFoodSlice"

interface IButtonProps {
  title: string
  activeFocus: boolean
  category: string
}

const Button: FC<IButtonProps> = ({ title, category, activeFocus }) => {
  const dispatch = useAppDispatch()
  const foods = useAppSelector((state) => state.allFoodData.allFoods)
  const isHaveFoods =
    foods.filter((item) => item.category === category).length > 0

  if (isHaveFoods) {
    return (
      <button
        className={`btn-category ${activeFocus ? "shadow-btn-active" : ""}`}
        onClick={() => dispatch(filterByCategory(category))}
      >
        {title}
      </button>
    )
  } else if (category === "liked") {
    return (
      <button
        className={`btn-category ${activeFocus ? "shadow-btn-active" : ""}`}
        onClick={() => dispatch(filterByCategory(category))}
      >
        {title}
      </button>
    )
  } else {
    return <></>
  }
}

export default Button
