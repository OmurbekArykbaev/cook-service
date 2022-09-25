import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import DFItem from "../../components/DeliveryFoodItem/DFItem"
import Progress from "../../components/ProgressBar/Progress"
import Title from "../../components/Title/Title"
import Wrapper from "../../components/Wrapper/Wrapper"
import { useAppDispatch, useAppSelector } from "../../hooks/rtkHooks"
import { addOrder, changeStatusOrder } from "../../redux/userSlice"

const Shipping = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [shipPrice, setShipPrice] = useState<number>(0)
  const { addresses, orders } = useAppSelector((state) => state.userPofile)

  const [currentOrder] = orders.filter((item) => item.status === "current")

  const totalSum = currentOrder.totalSum

  const rejectOrderHandler = () => {
    dispatch(changeStatusOrder({ id: currentOrder.id, status: "rejected" }))
    navigate("/orders")
  }

  useEffect(() => {
    if (totalSum >= 500) setShipPrice(0)
    else if (totalSum < 500) setShipPrice(200)
  }, [totalSum])

  return (
    <Wrapper>
      <section>
        <div className="flex flex-col py-8">
          {/* <!-- title --> */}
          <Title toPath="/" titleName={`${currentOrder.id}`} />
          {/* <!-- progress bar --> */}
          <Progress />
          {/* <!-- items wrapper --> */}
          <div className="flex flex-col">
            <div className="bg-[#FFFFFF66] p-3 rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[5px] rounded-br-[20px] mb-3">
              {currentOrder &&
                currentOrder.foods.map((item) => (
                  <DFItem
                    key={item.id}
                    img={item.image}
                    title={item.name}
                    homeMade={false}
                    quantity={item.quantityProduct}
                    price={item.price}
                  />
                ))}

              {/*  */}
              {/* <DFItem /> */}

              {/* <!-- shipping and quantity --> */}
              <div className="w-full flex flex-col py-2 px-6">
                <div className="w-full flex justify-between py-4 border-[#21262914] border-b border-t">
                  <h3 className="font-bold text-lg">Доставка</h3>
                  <h3 className="font-bold text-lg">{shipPrice} c</h3>
                </div>
                <div className="w-full flex justify-between pt-4">
                  <h3 className="font-bold text-lg">Итого</h3>
                  <h3 className="font-bold text-lg">{totalSum} сом</h3>
                </div>
              </div>
            </div>

            {/* <!-- when, where, pay --> */}
            <ul>
              <li className="bg-[#FFFFFF66] py-4 px-8 mb-3 flex flex-col rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[5px] rounded-br-[20px]">
                <p className="text-sm text-[#b1b2b3]">Когда</p>
                <h3 className="text-lg">Как можно скорее</h3>
              </li>

              <li className="bg-[#FFFFFF66] py-4 px-8 mb-3 flex flex-col rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[5px] rounded-br-[20px]">
                <p className="text-sm text-[#b1b2b3]">Куда</p>
                <h3 className="text-lg">{addresses && addresses[0].street}</h3>
              </li>

              <li className="bg-[#FFFFFF66] py-4 px-8 mb-3 flex flex-col rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[5px] rounded-br-[20px]">
                <p className="text-sm text-[#b1b2b3]">Оплата</p>
                <h3 className="text-lg">Картой курьеру</h3>
              </li>
            </ul>
          </div>

          {/* <!-- button to order --> */}
          <div className="flex justify-center w-full md:px-12 py-3 mb-5  md:justify-end">
            <button
              onClick={rejectOrderHandler}
              className="w-full btn text-xl font-bold md:px-7 py-4 md:w-auto md:text-lg lg:px-6 lg:py-2"
            >
              Отменить заказ
            </button>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}

export default Shipping
