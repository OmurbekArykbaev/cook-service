import { useQuery } from "react-query"

import { useAppDispatch, useAppSelector } from "../../hooks"
import { fetchCategories } from "../../services/fetchData"
import Button from "./Button"
import CategoryMobileMenu from "./CategoryMobileMenu"
import { getCategories } from "../../redux/getCategorySlice"
import Error from "../Error"

const Category = () => {
  const dispatch = useAppDispatch()
  const { fetchCategory, fetchProducts } = useAppSelector((state) => state)
  const { filterState } = fetchProducts
  const { categoriesData } = fetchCategory

  const { isLoading, error } = useQuery("categories", () => fetchCategories(), {
    onSuccess: (data) => dispatch(getCategories(data)),
  })

  return (
    <section className="pt-2">
      <div className="w-full flex flex-col py-4">
        {(error as Error) ? (
          <Error typeError="Server" message="Ошибка соединения!" />
        ) : (
          <div className="hidden  flex-col items-center md:flex md:flex-row lg:mb-0 lg:items-center py-2 z-[5]">
            {isLoading && <h1>Loading...</h1>}
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
        )}

        {/* Dropdown menu */}

        {!(error as Error) && (
          <CategoryMobileMenu
            isLoading={isLoading}
            error={error}
            data={categoriesData}
            filter={filterState}
          />
        )}
      </div>
    </section>
  )
}

export default Category
