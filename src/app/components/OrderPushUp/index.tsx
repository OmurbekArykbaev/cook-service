import { useAppSelector } from "../../hooks"

const PushUpOrder = () => {
  const data = useAppSelector((state) => state.globalChanges.isOpen)

  if (!data) {
    return null
  }

  return (
    <div className="fixed top-7 left-5 lg:left-[50%] lg:-translate-x-2/4 z-50">
      <div className="flex flex-col max-w-[770px] mr-6 mb-6">
        {/* <!-- Image part --> */}
        <div className="relative flex justify-center lg:items-center bg-[#FE724B] h-[200px] md:h-[360px] rounded-tl-[40px] rounded-tr-[40px]">
          <div className="absolute top-5 left-5">
            <button>
              <img src="./img/Vector.svg" alt="" />
            </button>
          </div>
          <img src="./img/dish.png" alt="Dish" />
          <div className="absolute flex justify-center items-center bottom-[-10px] left-10 rounded-full p-1 bg-white shadow-chilli">
            <button>
              <img src="./img/chilli.png" alt="" />
            </button>
          </div>
        </div>

        {/* <!-- Text content part --> */}
        <div className="flex flex-col items-start bg-[#212629] p-6 sm:p-12 border border-white/50 rounded-br-[40px] rounded-bl-[40px]">
          <h4 className="font-bold text-lg sm:text-xl text-white">
            Картофель с луком и белыми грибами
          </h4>
          <div className="flex items-center w-full py-3">
            <span className="text-[10px] sm:text-sm text-white mr-4">320г</span>
            <span className="text-[10px] sm:text-sm text-white mr-4">
              1040 ккал
            </span>
            <span className="text-[10px] sm:text-sm text-white mr-4">430Р</span>
          </div>
          <p className="text-sm sm:text-lg text-white leading-5 py-3">
            Это вкусное и сытное блюдо является любимым блюдом во многих семьях,
            полюбите его и вы.
          </p>

          <div className="flex flex-col py-3 w-[100%] ">
            <h1 className="text-white text-sm md:text-xl font-bold mb-5">
              Дополнительно:
            </h1>
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
          </div>

          <div className="w-full flex  items-center py-3">
            <div className="flex items-center border border-white rounded-full text-xl mr-5 text-white">
              <button className="px-2 sm:px-5 py-1 font-bold">-</button>
              <span className="px-2 py-1 text-sm">1</span>
              <button className="px-2 sm:px-5 py-1 font-bold">+</button>
            </div>

            <button className="btn shadow-btn-black-version py-2 w-full bg-transparent text-white font-bold">
              Добавить
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PushUpOrder
