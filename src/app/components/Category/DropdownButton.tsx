import { useAppDispatch, useAppSelector } from "../../hooks"
import { filterByCategory } from "../../pages/Home/allFoodSlice"
import { FC } from "react"

type Props = {
  title: string
  isActive: boolean
  category: string
  isOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DropdownButton: FC<Props> = ({ title, isActive, category, isOpen }) => {
  const dispatch = useAppDispatch()
  const categoryClickHandler = () => {
    dispatch(filterByCategory(category))
    isOpen((state) => !state)
  }

  const foods = useAppSelector((state) => state.allFoodData.allFoods)
  const isHaveFoods =
    foods.filter((item) => item.category === category).length > 0
  if (isHaveFoods) {
    return (
      <li
        onClick={categoryClickHandler}
        className={`py-2 px-4 cursor-pointer font-bold  ${
          isActive ? "text-orange" : ""
        } hover:opacity-[0.3]`}
      >
        {title}
      </li>
    )
  } else if (category === "liked") {
    return (
      <li
        onClick={categoryClickHandler}
        className={`py-2 px-4 cursor-pointer font-bold  ${
          isActive ? "text-orange" : ""
        } hover:opacity-[0.3]`}
      >
        {title}
      </li>
    )
  } else {
    return <></>
  }
}

export default DropdownButton
