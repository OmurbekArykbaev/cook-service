import React, { useState } from "react"
import { useQuery } from "react-query"
import { useDispatch } from "react-redux"
import Carousel from "../../components/Carousel/Carousel"
import Category from "../../components/Category/Category"
import FoodCard from "../../components/FoodCard/FoodCard"
import Wrapper from "../../components/Wrapper/Wrapper"
import { useAppDispatch, useAppSelector } from "../../hooks/rtkHooks"
import { fetchFoods } from "../../services/server"
import IFood from "../../types/FoodData"
import { fetchAllFoods } from "./allFoodSlice"

const Home = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state.allFoodData.allFoods)
  const filter = useAppSelector(
    (state) => state.filteredByCategory.filterByCategory
  )
  const { isLoading, error } = useQuery("foods", () => fetchFoods(), {
    onSuccess: (data) => dispatch(fetchAllFoods({ foods: data, filter })),
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
          {state && state.map((item) => <FoodCard key={item.id} {...item} />)}
        </div>
      </section>
    </Wrapper>
  )
}

export default Home
