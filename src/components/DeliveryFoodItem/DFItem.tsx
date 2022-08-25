import React from "react"

const DFItem = () => {
  return (
    <div className="py-3 px-6 mb-3 rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[5px]">
      <div className="flex flex-col  md:flex-row md:items-center md:justify-between">
        {/* <!-- title, img --> */}
        <div className="flex  border-b  md:border-b-0  pb-6 md:pb-0">
          <div className="flex justify-center items-center mr-6 min-w-[30px]  md:max-w-[60px] bg-[#FE9102]">
            <img src="./img/dish.png" alt="" />
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-xl md:text-3xl">
              Картофель с луком и белыми грибами
            </h3>
            <p className="text-sm text-zinc-400">По домашнему</p>
          </div>
        </div>

        {/* <!-- quan and price --> */}
        <div className="flex  space-x-3 items-center justify-center  pt-6 md:pt-0 md:justify-start">
          <p className="text-sm  mr-3">2 шт. * По домашнему</p>
          <h3 className="text-lg font-bold">450 860₽</h3>
        </div>
      </div>
    </div>
  )
}

export default DFItem
