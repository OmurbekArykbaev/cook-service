import { FC } from "react"
import { Link } from "react-router-dom"

interface IPropsItem {
  title: string
  address: string
  linkTo: number
}

const Item: FC<IPropsItem> = ({ title, address, linkTo }) => {
  return (
    <Link
      to={`/addresses/${linkTo}`}
      className="w-full h-[170px] rounded-xl shadow-toorder-panel-block sm:w-[360px]"
    >
      <div className="h-full flex flex-col justify-between p-6 items-start text-2xl">
        <h1 className="font-bold">{title}</h1>
        <p className="text-sm">{address}</p>
      </div>
    </Link>
  )
}

export default Item
