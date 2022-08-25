import React from "react"

const OrderItem = () => {
  return (
    <li className=" p-3 md:p-6 bg-[#FFFFFF66] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[5px] mb-3">
      <div className="flex flex-col md:items-center md:justify-between md:flex-row">
        <div className="flex flex-col items-start border-b border-white pb-10 md:border-b-0 md:pb-0">
          <h3 className="text-lg sm:text-xl font-bold">8 апреля 2022</h3>
          <p className="text-sm sm:text-lg text-zinc-400">
            №298456548 на 4 250₽
          </p>
        </div>

        <div className="flex justify-center items-center pt-5 md:justify-end md:pt-0">
          <p className="text-sm mr-6">Текущий</p>
          <div className="bg-[#FED149] p-2 rounded-full shadow-order-current-icon">
            <img src="./img/current.svg" alt="" />
          </div>
        </div>
      </div>
    </li>
  )
}

export default OrderItem
