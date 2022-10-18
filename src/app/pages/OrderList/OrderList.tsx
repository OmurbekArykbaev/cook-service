import { useEffect, useState } from "react"

import { useAppSelector } from "../../hooks"
import { OrderItem, Title, Wrapper } from "../../components"
import { IOrders } from "../../types"
import ButtonCategory from "./ButtonCategory"

type TCategory = {
  id: number
  name: string
  category: "all" | "delivered" | "rejected"
}

const dataCategory: TCategory[] = [
  {
    id: 1,
    name: "Все",
    category: "all",
  },
  {
    id: 2,
    name: "Доставлено",
    category: "delivered",
  },
  {
    id: 3,
    name: "Отменен",
    category: "rejected",
  },
]

const OrderList = () => {
  const [data, setData] = useState<IOrders[]>([])
  const [filter, setFilter] = useState<"all" | "delivered" | "rejected">("all")

  const { orders } = useAppSelector((state) => state.userPofile)

  useEffect(() => {
    if (filter === "all") {
      setData(orders.orderList)
    } else if (filter === "delivered") {
      setData(orders.orderList.filter((i) => i.status === "delivered"))
    } else if (filter === "rejected") {
      setData(orders.orderList.filter((i) => i.status === "rejected"))
    }
  }, [filter, orders])

  return (
    <Wrapper>
      <section id="orderlist">
        <div className="flex flex-col py-4 sm:py-8">
          <Title toPath="/" titleName="Мои заказы" />

          <div className=" flex  items-center flex-wrap  sm:flex-nowrap px-6 sm:px-12">
            {dataCategory.map((item) => (
              <ButtonCategory
                setFilter={setFilter}
                name={item.name}
                category={item.category}
                isActive={filter === item.category}
              />
            ))}
          </div>

          {/* <!-- item wrapper --> */}

          <ul className="flex flex-col p-6 md:p-12 w-full">
            {data &&
              data
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
