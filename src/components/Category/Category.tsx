import { useState } from "react"
import { useQuery } from "react-query"
import { useAppDispatch, useAppSelector } from "../../hooks/rtkHooks"
import { fetchCategories } from "../../services/server"
import Button from "./Button"
import { getCategories } from "./categorySlice"

const Category = () => {
  const dispatch = useAppDispatch()
  const [open, isOpen] = useState<boolean>(false)
  const { getAllCategories, allFoodData } = useAppSelector((state) => state)
  const { filterState } = allFoodData
  const { categoriesData } = getAllCategories

  const { isLoading, error } = useQuery("categories", () => fetchCategories(), {
    onSuccess: (data) => dispatch(getCategories(data)),
  })

  return (
    <section className="pt-2">
      <div className="w-full flex flex-col py-4">
        <div className="hidden  flex-col items-center md:flex md:flex-row lg:mb-0 lg:items-center py-2 z-[5]">
          {isLoading && <h1>Loading...</h1>}
          {(error as Error) && <p>Error </p>}
          {categoriesData &&
            categoriesData.map((item) => (
              <Button
                key={item.id}
                title={item.title}
                activeFocus={filterState === item.category}
                category={item.category}
              />
            ))}
        </div>

        {/* Dropdown menu */}

        <button
          onClick={() => isOpen(!open)}
          className="w-[70%] mx-auto py-3 px-7 bg-slate-400 md:hidden"
        >
          Категорий
        </button>

        <div
          className={`${
            open ? `block` : `hidden`
          } w-[70%] mx-auto bg-slate-500 md:hidden`}
        >
          <ul>
            <li>Любимое</li>
            <li>Салаты</li>
            <li>Закуски</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Category
