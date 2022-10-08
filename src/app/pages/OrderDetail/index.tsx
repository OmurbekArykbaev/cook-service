import { Title, Wrapper } from "../../components"
import React from "react"
import { useParams } from "react-router-dom"
import { useAppSelector } from "../../hooks"
import { IAddressData } from "@base/app/types/userProfile"

const OrderDetail = () => {
  const params = useParams<string>()
  const [order] = useAppSelector((state) =>
    state.userPofile.orders.filter((item) => item.id.toString() === params.id)
  )
  const { id, date, totalSum, address, foods } = order
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
      <section>
        <div className="flex flex-col py-8">
          <Title titleName="Деталь заказа" toPath="/" />

          <div>
            <p>
              Номер заказа: <strong>{id}</strong>
            </p>
            <p>
              Время: <strong>{date}</strong>
            </p>
            <p>
              Итого: <strong>{totalSum}</strong>
            </p>
            <p>
              По адресу:{" "}
              <strong>
                {street} д {houseNumber}, кв {flatOffice && flatOffice + ","}
                {entrance && <> подъезд: {entrance} </>}
                {floor && <> этаж: {floor} </>}
                {callDoor && <>домофон:{callDoor}</>}
                <br />
                {comment && comment}
              </strong>
            </p>
            <p>
              Доставка: <strong>0</strong>
            </p>
            <p>
              Коментарий к доставке: <strong>Быстрее </strong>
            </p>
            <p>
              Оплата: <strong>Наличными</strong>
            </p>
            <ul>
              Блюда
              {foods.map((item, idx) => (
                <li key={item.id}>
                  #{idx + 1}: {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}

export default OrderDetail
