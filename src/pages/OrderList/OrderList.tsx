import React from "react"
import OrderItem from "../../components/OrderItem/OrderItem"
import Title from "../../components/Title/Title"
import Wrapper from "../../components/Wrapper/Wrapper"
import { useAppSelector } from "../../hooks/rtkHooks"

const OrderList = () => {
  const { orders } = useAppSelector((state) => state.userPofile)
  return (
    <Wrapper>
      <section>
        <div className="flex flex-col py-4 sm:py-8">
          {/* <!-- title --> */}

          <Title toPath="/" titleName="Мои заказы" />

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
            {orders &&
              orders
                .map((item) => (
                  <OrderItem
                    key={item.id}
                    id={item.id}
                    date={item.date}
                    totalSum={item.totalSum}
                    status={item.status}
                  />
                ))
                .reverse()}
          </ul>
        </div>
      </section>
    </Wrapper>
  )
}

export default OrderList
