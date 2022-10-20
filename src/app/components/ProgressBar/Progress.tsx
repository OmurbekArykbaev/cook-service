import React, { useState } from "react"

const Progress = () => {
  const [steps, setSteps] = useState<number>(1)

  return (
    <div className="relative w-full mx-auto mb-7  flex justify-between">
      {/* <!-- line --> */}
      <div className="absolute top-1/4 w-[97%] left-1/2 -translate-x-1/2 h-1 bg-white -z-10"></div>

      {/* <!-- item 1 --> */}
      <div className="flex flex-col items-start lg:items-center lg:justify-center">
        <div className="flex justify-center items-center mb-3 w-[40px] h-[40px]  bg-white rounded-full">
          <img src="./img/progress/item1.svg" alt="" />
        </div>
        <p className="text-sm ">Оформлен</p>
      </div>

      {/* <!-- item 2 --> */}
      <div className="flex flex-col items-center justify-center">
        <div
          className={`flex justify-center items-center mb-3 w-[40px] h-[40px] ${
            steps === 1 ? `bg-red-300` : `bg-white`
          } rounded-full`}
        >
          <img src="./img/progress/item2.svg" alt="" />
        </div>
        <p className="text-sm ">Готовиться</p>
      </div>

      {/* <!-- item 3 --> */}
      <div className="flex flex-col items-center justify-center">
        <div
          className={`flex justify-center items-center mb-3 w-[40px] h-[40px] ${
            steps === 2 ? `bg-red-300` : `bg-white`
          } rounded-full`}
        >
          <img src="./img/progress/item3.svg" alt="" />
        </div>
        <p className="text-sm ">В доставке</p>
      </div>

      {/* <!-- item 4 --> */}
      <div className="flex flex-col items-center justify-center">
        <div
          className={`flex justify-center items-center mb-3 w-[40px] h-[40px] ${
            steps === 3 ? `bg-red-300` : `bg-white`
          } rounded-full`}
        >
          <img src="./img/progress/item4.svg" alt="" />
        </div>
        <p className="text-sm ">Готово</p>
      </div>
    </div>
  )
}

export default Progress
