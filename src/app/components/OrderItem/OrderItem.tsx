import { FC } from "react"
import { Link } from "react-router-dom"
import Status from "./Status"

type Props = {
  date: string
  id: number
  totalSum: number
  status: "current" | "delivered" | "rejected"
}

const OrderItem: FC<Props> = ({ date, id, totalSum, status }) => {
  return (
    <li className=" p-3 md:p-6 bg-[#FFFFFF66] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[5px] mb-3">
      <Link to={`/order/detail/${id}`}>
        <div className="flex flex-col md:items-center md:justify-between md:flex-row">
          <div className="flex flex-col items-start border-b border-white pb-10 md:border-b-0 md:pb-0">
            <h3 className="text-lg sm:text-xl font-bold">{date}</h3>
            <p className="text-sm sm:text-lg text-zinc-400">
              №{id} на {totalSum} с
            </p>
          </div>

          <Status status={status} />
        </div>
      </Link>
    </li>
  )
}

export default OrderItem
