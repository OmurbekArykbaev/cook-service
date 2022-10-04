import { useQuery } from "react-query"
import { toast, ToastContainer } from "react-toastify"
import { Carousel, Category, FoodCard, Wrapper } from "../../components"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { fetchFoods } from "../../services/server"
import { fetchAllFoods } from "./allFoodSlice"

const Home = () => {
  const dispatch = useAppDispatch()
  const { allFoods, filterState } = useAppSelector((state) => state.allFoodData)
  const { wishlist } = useAppSelector((state) => state.userPofile)
  const [getCategory] = useAppSelector((state) =>
    state.getAllCategories.categoriesData.filter(
      (i) => i.category === filterState
    )
  )

  const { isLoading, error } = useQuery("foods", () => fetchFoods(), {
    onSuccess: (data) => dispatch(fetchAllFoods(data)),
  })

  return (
    <Wrapper nameClass="py-12">
      <Carousel />
      <div className="w-full flex">
        <div className="flex flex-col items-start mb-4 lg:flex-row ">
          <h1 className=" font-bold text-2xl mr-9">Частным клиентам</h1>
          <h1 className="font-bold text-2xl text-[#212629]/50">
            Корпоративные заказы
          </h1>
        </div>
      </div>
      <Category />
      <section>
        <div className="flex w-full py-8">
          <h1 className="hidden md:block font-bold text-4xl">
            {getCategory && getCategory.title}
          </h1>
        </div>

        <div className="w-full flex flex-col mx-auto justify-center sm:py-6 items-center lg:flex-wrap lg:flex-row lg:mx-auto">
          {isLoading && <h1>Loading...</h1>}
          {(error as Error) && <p>Error </p>}
          {allFoods &&
            allFoods
              .filter((item) => item.category === filterState)
              .map((item) => <FoodCard key={item.id} {...item} />)}

          {!(filterState === "liked") &&
            allFoods.filter((item) => item.category === filterState).length <
              1 && <h1>Товары в данной категории отсутствуют</h1>}
          {filterState === "liked" &&
            wishlist.map((item) => <FoodCard key={item.id} {...item} />)}
        </div>
      </section>
    </Wrapper>
  )
}

export default Home
