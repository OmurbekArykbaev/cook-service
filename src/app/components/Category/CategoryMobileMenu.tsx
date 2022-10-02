import { useAppSelector } from "../../hooks"
import IDataCategories from "@base/app/types/categories"
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
    <div className="flex flex-col items-end md:hidden">
      <button
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        className="w-[100%]  justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center sm:w-[50%] dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => isOpen((state) => !state)}
      >
        {isLoading && <>Loading</>}
        {(error as Error) && <p>Error </p>}
        {currentFilter.title}
        {open && <MdOutlineKeyboardArrowDown size={18} />}
        {!open && <MdOutlineKeyboardArrowUp size={18} />}
      </button>

      <div
        className={`${
          open ? `flex` : `hidden`
        } w-[100%] mt-4  border border-orange sm:w-[50%]`}
      >
        <ul className="flex flex-col w-full">
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
