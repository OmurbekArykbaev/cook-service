import { FC } from "react"
import { useParams } from "react-router-dom"

import { Title, Wrapper } from "../../components"
import { useAppSelector } from "../../hooks"
import { IAddressData } from "@base/app/types"
import FoodsList from "./FoodsList"
import Row from "./Row"

const OrderDetail = () => {
  const params = useParams<string>()
  const [order] = useAppSelector((state) =>
    state.orders.orders.orderList.filter(
      (item) => item.id.toString() === params.id
    )
  )
  const { id, date, totalSum, address, foods, deliveryPrice, status } = order
  const {
    street,
    houseNumber,
    entrance,
    floor,
    flatOffice,
    callDoor,
    comment,
  } = address ? (address as IAddressData) : (address as any)

  return (
    <Wrapper>
      <section className="flex flex-col py-8">
        <Title titleName="Деталь заказа" toPath="/orders" />

        <div>
          <OrderStatus type={status} />

          <Row title="Номер заказа" data={id} />
          <Row title="Время оформления заказа" data={date} />
          <Row title="Способ оплаты" data={"Наличными"} />
          <Row
            title="Адрес доставки"
            node={
              <>
                {" "}
                {street} д {houseNumber} кв {flatOffice ? flatOffice : "*"}{" "}
                <br />
                Этаж: {floor ? floor : "*"} Домофон: {callDoor ? callDoor : "*"}{" "}
                Подъезд: {entrance ? entrance : "*"}
                <br />
                Коментарий: {comment ? comment : "*"}
              </>
            }
          />
          <FoodsList foods={foods} />
          <Row
            title="Доставка"
            data={deliveryPrice ? `${deliveryPrice} сом` : "Бесплатно"}
          />
          <Row title="Итого" data={`${totalSum} сом`} />
        </div>
      </section>
    </Wrapper>
  )
}

type OrderStatusProps = {
  type: "current" | "delivered" | "rejected"
}
const OrderStatus: FC<OrderStatusProps> = ({ type }): any => {
  if (type === "current")
    return (
      <h1 className="text-[20px] text-center font-bold py-4 text-yellow-600">
        Текущий заказ
      </h1>
    )
  if (type === "delivered")
    return (
      <h1 className="text-[20px] text-center font-bold py-4 text-green-600">
        Доставлен
      </h1>
    )
  if (type === "rejected")
    return (
      <h1 className="text-[20px] text-center font-bold py-4 text-red-600">
        Отменен
      </h1>
    )
}

export default OrderDetail
