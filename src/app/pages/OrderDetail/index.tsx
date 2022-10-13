import { Title, Wrapper } from "../../components"
import { useParams } from "react-router-dom"
import { useAppSelector } from "../../hooks"
import { IAddressData } from "@base/app/types/userProfile"
import Row from "./Row"
import FoodsList from "./FoodsList"

const OrderDetail = () => {
  const params = useParams<string>()
  const [order] = useAppSelector((state) =>
    state.userPofile.orders.orderList.filter(
      (item) => item.id.toString() === params.id
    )
  )
  const { id, date, totalSum, address, foods, deliveryPrice } = order
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
            data={deliveryPrice ? deliveryPrice : "Бесплатно"}
          />
          <Row title="Итого" data={`${totalSum} сом`} />
        </div>
      </section>
    </Wrapper>
  )
}

export default OrderDetail
