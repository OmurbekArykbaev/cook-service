import React from "react"
import { Link } from "react-router-dom"
import DFItem from "../../components/DeliveryFoodItem/DFItem"
import Progress from "../../components/ProgressBar/Progress"
import Title from "../../components/Title/Title"

const Shipping = () => {
  return (
    <main className="container wrapper">
      <section>
        <div className="flex flex-col py-8">
          {/* <!-- title --> */}
          <Title toPath="/" titleName="№123123123" />
          {/* <!-- progress bar --> */}
          <Progress />
          {/* <!-- items wrapper --> */}
          <div className="flex flex-col">
            <div className="bg-[#FFFFFF66] p-3 rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[5px] rounded-br-[20px] mb-3">
              {/* <!-- foods wrapper  --> */}
              <DFItem />
              <DFItem />
              <DFItem />

              {/* <!-- shipping and quantity --> */}
              <div className="w-full flex flex-col py-2 px-6">
                <div className="w-full flex justify-between py-4 border-[#21262914] border-b border-t">
                  <h3 className="font-bold text-lg">Доставка</h3>
                  <h3 className="font-bold text-lg">0₽</h3>
                </div>
                <div className="w-full flex justify-between pt-4">
                  <h3 className="font-bold text-lg">Итого</h3>
                  <h3 className="font-bold text-lg">7 610₽</h3>
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
                <h3 className="text-lg">
                  Пресненская набережная, 10с1, кв./офис 250, подъезд 1, этаж
                  25, домофон 250
                </h3>
              </li>

              <li className="bg-[#FFFFFF66] py-4 px-8 mb-3 flex flex-col rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[5px] rounded-br-[20px]">
                <p className="text-sm text-[#b1b2b3]">Оплата</p>
                <h3 className="text-lg">Картой курьеру</h3>
              </li>
            </ul>
          </div>

          {/* <!-- button to order --> */}
          <div className="flex justify-center w-full md:px-12 py-3 mb-5  md:justify-end">
            <button className="w-full btn text-xl font-bold md:px-7 py-4 md:w-auto md:text-lg lg:px-6 lg:py-2">
              Отменить заказ
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Shipping
