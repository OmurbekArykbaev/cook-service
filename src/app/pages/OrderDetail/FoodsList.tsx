import { IProductInCart } from "@base/app/types/userProfile"
import React, { FC } from "react"

type Props = {
  foods: IProductInCart[]
}

const FoodsList: FC<Props> = ({ foods }) => {
  return (
    <div className="flex flex-col w-full border p-1">
      {/* 1 row */}
      <div className="grid grid-cols-4 text-center border">
        {/* 1 col */}
        <div className="border-r">
          <strong>Название</strong>
        </div>
        {/* 2 col */}
        <div className="border-r">
          <strong>кол-во</strong>
        </div>
        {/* 3 col */}
        <div className="border-r">
          <strong>цена</strong>
        </div>
        {/* 4 col */}
        <div className="">
          <strong>сумма</strong>
        </div>
      </div>

      {/* rows */}
      {foods.map((item) => (
        <div key={item.id} className="grid grid-cols-4  text-center">
          {/* col1 */}
          <div className="flex  items-center justify-center border-r  border-b py-4">
            <p className="px-2">{item.name}</p>
          </div>
          {/* col1 */}
          <div className="flex  items-center justify-center border-r  border-b py-4">
            <p>{item.quantityProduct} шт</p>
          </div>
          {/* col1 */}
          <div className="flex items-center justify-center border-r  border-b py-4">
            <p>{item.price} сом</p>
          </div>
          {/* col1 */}
          <div className="flex items-center justify-center  border-b py-4">
            <p>{item.price * item.quantityProduct} сом</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FoodsList
