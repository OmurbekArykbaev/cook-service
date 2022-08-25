import React from "react"
import Count from "../ui/Count/Count"

const CartItem = () => {
  return (
    <li className="p-3 sm:p-6 bg-[#FFFFFF66] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[5px] mb-3">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        {/* <!-- title, img --> */}
        <div className="flex w-full border-b  md:border-b-0  pb-6 md:pb-0">
          <div className="flex justify-center items-center mr-6 min-w-[30px]  md:max-w-[60px] bg-orange">
            <img src="./img/dish.png" alt="" />
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-xl md:text-3xl">
              Картофель с луком и белыми грибами
            </h3>
            <p className="text-sm text-zinc-400">По домашнему</p>
          </div>
        </div>

        {/* <!-- quan and price --> */}
        <div className="w-auto flex justify-between  items-center pt-6 md:w-[30%] md:pt-0 md:justify-start">
          <Count />
          <h3 className="text-lg font-bold">450 860₽</h3>
        </div>
      </div>
    </li>
  )
}

export default CartItem
