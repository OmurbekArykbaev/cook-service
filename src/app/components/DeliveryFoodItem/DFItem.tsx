import React, { FC } from "react"

type Props = {
  img: string
  title: string
  homeMade?: boolean
  quantity: number
  price: number
  isHot?: boolean
}

const DFItem: FC<Props> = ({
  img,
  title,
  homeMade,
  quantity,
  price,
  isHot,
}) => {
  return (
    <div className="py-3 px-6 mb-3 rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[5px]">
      <div className="flex flex-col  md:flex-row md:items-center md:justify-between">
        {/* <!-- title, img --> */}
        <div className="flex  border-b  md:border-b-0  pb-6 md:pb-0">
          <div className="flex justify-center items-center mr-6 min-w-[30px]  md:max-w-[60px] bg-[#FE9102]">
            <img src={img} alt={title} />
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-xl md:text-3xl">{title}</h3>
            <p className="text-sm text-zinc-400">
              {homeMade && "По домашнему"} {isHot && "Острый"}
            </p>
          </div>
        </div>

        {/* <!-- quan and price --> */}
        <div className="flex  space-x-3 items-center justify-center  pt-6 md:pt-0 md:justify-start">
          <p className="text-sm  mr-3">
            {quantity} шт. {homeMade && "* По домашнему"}
          </p>
          <h3 className="text-lg font-bold">{quantity * price} сом</h3>
        </div>
      </div>
    </div>
  )
}

export default DFItem
