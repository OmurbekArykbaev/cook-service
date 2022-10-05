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
  const { street } = address ? (address as IAddressData) : (address as any)

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
              По адресу: <strong>{street}</strong>
            </p>
            <ul>
              {foods.map((item) => (
                <li key={item.id}>Блюдо: {item.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}

export default OrderDetail
