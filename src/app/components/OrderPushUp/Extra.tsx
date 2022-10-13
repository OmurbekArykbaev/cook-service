import React from "react"

const Extra = () => {
  return (
    <div className="flex flex-col">
      <div
        className="flex justify-between  text-white text-lg py-1 px-3 sm:py-3 sm:px-5 mb-2 bg-[#00000040]
                   sm:rounded-tl-[30px] sm:rounded-tr-[30px] sm:rounded-br-[30px] sm:rounded-bl-[5px]"
      >
        <h3>Побольше лука</h3>
        <div>
          <span className="mr-3">+ 20₽</span>
          <input
            className="border-none rounded-lg"
            type="checkbox"
            name="checkbox"
            id=""
          />
        </div>
      </div>

      <div
        className="flex justify-between  text-white text-lg py-1 px-3 sm:py-3 sm:px-5 mb-2 bg-[#00000040]
               sm:rounded-tl-[30px] sm:rounded-tr-[30px] sm:rounded-br-[30px] sm:rounded-bl-[5px]"
      >
        <h3>По домашнему</h3>
        <div className="sm:flex">
          <span className="mr-3">+ 20₽</span>
          <input
            className="border-none rounded-lg"
            type="checkbox"
            name="checkbox"
            id=""
          />
        </div>
      </div>

      <div
        className="flex justify-between  text-white text-lg py-1 px-3 sm:py-3 sm:px-5 mb-2 bg-[#00000040]
           sm:rounded-tl-[30px] sm:rounded-tr-[30px] sm:rounded-br-[30px] sm:rounded-bl-[5px]"
      >
        <h3>Побольше лука</h3>
        <div className="sm:flex">
          <span className="mr-3">+ 20₽</span>
          <input
            className="border-none rounded-lg"
            type="checkbox"
            name="checkbox"
            id=""
          />
        </div>
      </div>
    </div>
  )
}

export default Extra
