import { useAppSelector } from "../../hooks"
import IDataCategories from "@base/app/types/Categories"
import React, { FC, useState } from "react"
import DropdownButton from "./DropdownButton"
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md"

type Props = {
  isLoading: boolean
  error: unknown
  data: IDataCategories[]
  filter: string
}

const CategoryMobileMenu: FC<Props> = ({ isLoading, error, data, filter }) => {
  const [open, isOpen] = useState<boolean>(false)
  const [currentFilter] = useAppSelector((state) =>
    state.getAllCategories.categoriesData.filter(
      (item) => item.category === filter
    )
  )
  return (
    <div className="relative flex flex-col items-end md:hidden">
      <button
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        className="category-btn"
        type="button"
        onClick={() => isOpen((state) => !state)}
      >
        {isLoading && <>Loading</>}
        {(error as Error) && <p>Error </p>}
        {currentFilter && currentFilter.title}

        {open && <MdOutlineKeyboardArrowDown size={18} />}
        {!open && <MdOutlineKeyboardArrowUp size={18} />}
      </button>

      <div
        className={`${
          open ? `flex` : `hidden`
        } absolute top-10 z-[80] w-[100%] mt-4 rounded-md  sm:w-[50%] transition-all duration-300 shadow-2xl bg-[#e9e9e9]`}
      >
        <ul className={` flex  flex-col w-full`}>
          {data &&
            data.map((item) => (
              <DropdownButton
                key={item.id}
                isOpen={isOpen}
                title={item.title}
                isActive={filter === item.category}
                category={item.category}
              />
            ))}
        </ul>
      </div>
    </div>
  )
}

export default CategoryMobileMenu
