import React from "react"
import Carousel from "../components/Carousel/Carousel"
import Category from "../components/Category/Category"
import FoodCard from "../components/FoodCard/FoodCard"
import Wrapper from "../components/Wrapper/Wrapper"

const Home = () => {
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
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
        </div>
      </section>
    </Wrapper>
  )
}

export default Home
