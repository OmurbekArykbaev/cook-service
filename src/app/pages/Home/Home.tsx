import { useQuery } from "react-query"

import {
  Carousel,
  Category,
  Error,
  FoodCard,
  PushToast,
  Wrapper,
} from "../../components"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { fetchFoods } from "../../services/fetchData"
import { fetchAllFoods } from "../../redux"

const Home = () => {
  const dispatch = useAppDispatch()

  const { allFoods, filterState } = useAppSelector(
    (state) => state.fetchProducts
  )
  const { wishlist } = useAppSelector((state) => state.wishList)

  const [getCategory] = useAppSelector((state) =>
    state.fetchCategory.categoriesData.filter((i) => i.category === filterState)
  )

  const { isLoading, error } = useQuery("foods", () => fetchFoods(), {
    onSuccess: (data) => dispatch(fetchAllFoods(data)),
    onError: () => PushToast(`Не удается получить данные`, 3000),
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

        {(error as Error) ? (
          <Error typeError={"Server"} />
        ) : (
          <div className="w-full flex flex-col mx-auto justify-center sm:py-6 items-center lg:flex-wrap lg:flex-row lg:mx-auto">
            {isLoading && <h1>Загрузка...</h1>}
            {allFoods &&
              allFoods
                .filter((item) => item.category === filterState)
                .map((item) => <FoodCard key={item.id} {...item} />)}

            {filterState === "liked" &&
              wishlist.map((item) => <FoodCard key={item.id} {...item} />)}

            {wishlist.length === 0 && filterState === "liked" && (
              <>Нет любимых продуктов.</>
            )}
          </div>
        )}
      </section>
    </Wrapper>
  )
}

export default Home
