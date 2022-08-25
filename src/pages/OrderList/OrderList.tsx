import React from "react"
import { Link } from "react-router-dom"
import OrderItem from "../../components/OrderItem/OrderItem"

const OrderList = () => {
  return (
    <main className="container wrapper">
      <section>
        <div className="flex flex-col py-4 sm:py-8">
          {/* <!-- title --> */}
          <div className="flex items-center w-full mb-12">
            <Link to="/" className="mr-8">
              <img src="./img/arrow.png" alt="Back" />
            </Link>

            <h1 className="text-[#212629] font-bold text-2xl sm:text-4xl">
              Мои заказы
            </h1>
          </div>

          {/* <!-- category --> */}

          <div className=" flex  items-center flex-wrap  sm:flex-nowrap px-6 sm:px-12">
            <button className="w-full btn shadow-btn-active mb-3 sm:mb-0 sm:w-auto">
              Все
            </button>
            <button className="w-full btn mb-3 sm:mb-0 sm:w-auto">
              Доставлены
            </button>
            <button className=" w-full btn mb-3 sm:mb-0 sm:w-auto">
              Отменены
            </button>
          </div>

          {/* <!-- item wrapper --> */}

          <ul className="flex flex-col p-6 md:p-12 w-full">
            {/* <!-- item 1 --> */}
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
          </ul>
        </div>
      </section>
    </main>
  )
}

export default OrderList
