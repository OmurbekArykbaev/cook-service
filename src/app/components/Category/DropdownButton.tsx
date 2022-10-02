import { useAppDispatch } from "../../hooks"
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
  return (
    <li
      onClick={categoryClickHandler}
      className={`py-2 px-4 cursor-pointer  ${
        isActive ? "bg-red-300" : ""
      } hover:bg-slate-400`}
    >
      {title}
    </li>
  )
}

export default DropdownButton
