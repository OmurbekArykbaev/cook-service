import { FC } from "react"
import { useNavigate } from "react-router-dom"
import { IAddressData } from "@base/app/types"

const Item: FC<IAddressData> = (props) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(`${props.id}`)}
      className="w-full h-[170px] rounded-xl shadow-toorder-panel-block cursor-pointer sm:w-[360px]"
    >
      <div className="h-full flex flex-col justify-between p-6 items-start text-2xl">
        <h1 className="font-bold">{props.street}</h1>
        <p className="text-sm">
          {`Улица: ${props.street}. Дом: ${props.houseNumber}.`}
          <br />
          {` Квартира: ${props.flatOffice}. Подъезд: ${props.entrance}. Этаж: ${props.floor}. Домофон/охрана: ${props.callDoor}`}
        </p>
      </div>
    </div>
  )
}

export default Item
