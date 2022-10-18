import { FC } from "react"
import { StatusOrder } from "@base/app/types"

const Status: FC<StatusOrder> = ({ status }) => {
  switch (status) {
    case "current":
      return (
        <div className="flex justify-center items-center pt-5 md:justify-end md:pt-0">
          <p className="text-sm mr-6">Текущий</p>
          <div className="bg-[#FED149] p-2 rounded-full shadow-order-current-icon">
            <img src="./img/current.svg" alt="" />
          </div>
        </div>
      )

    case "delivered":
      return (
        <div className="flex justify-center items-center pt-5 md:justify-end md:pt-0">
          <p className="text-sm mr-6">Доставлен</p>
          <div className="bg-green-500 p-2 rounded-full shadow-order-current-icon">
            <img src="./img/succes.svg" alt="" />
          </div>
        </div>
      )

    case "rejected":
      return (
        <div className="flex justify-center items-center pt-5 md:justify-end md:pt-0">
          <p className="text-sm mr-6">Отменен</p>
          <div className="bg-red-500 p-2 rounded-full shadow-order-current-icon">
            <img src="./img/injected.svg" alt="" />
          </div>
        </div>
      )
  }
}

export default Status
