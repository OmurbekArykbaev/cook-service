import React, { useState } from "react"
import { useQuery } from "react-query"
import Carousel from "../../components/Carousel/Carousel"
import Category from "../../components/Category/Category"
import FoodCard from "../../components/FoodCard/FoodCard"
import Wrapper from "../../components/Wrapper/Wrapper"
import { fetchFoods } from "../../services/FoodsQuery.service"
import IFood from "../../types/FoodData"

const Home = () => {
  const [foods, setFoods] = useState<IFood[]>([])
  const { isLoading, error } = useQuery("foods", () => fetchFoods(), {
    onSuccess: (data) => {
      setFoods(data)
    },
    onError: (error: any) => {
      alert(error.message)
    },
  })

  return (
    <Wrapper nameClass="py-12">
      {/* <!-- Carousel and img --> */}
      <Carousel />

      {/* <!-- Category --> */}
      <div className="w-full flex">
        <div className="flex flex-col items-start mb-4 lg:flex-row ">
          <h1 className=" font-bold text-2xl mr-9">Частным клиентам</h1>
          <h1 className="font-bold text-2xl text-[#212629]/50">
            Корпоративные заказы
          </h1>
        </div>
      </div>
      <Category />

      {/* <!-- Food cards --> */}

      <section>
        <div className="flex w-full py-8">
          <h1 className="font-bold text-4xl">Закуски</h1>
        </div>
        {/* <!-- wrapper cards --> */}

        <div className="w-full flex flex-col mx-auto justify-center sm:py-6 items-center lg:flex-wrap lg:flex-row lg:mx-auto">
          {isLoading && <h1>Loading...</h1>}
          {(error as Error) && <p>Error </p>}
          {foods && foods.map((item) => <FoodCard key={item.id} {...item} />)}
        </div>
      </section>
    </Wrapper>
  )
}

export default Home
