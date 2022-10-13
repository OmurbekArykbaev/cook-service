import { useAppDispatch } from "../../hooks"
import { setIsOpen } from "../../redux/"
import Extra from "./Extra"
import Count from "./Count"

const PanelPart = () => {
  const dispatch = useAppDispatch()
  const addInCartHandler = () => {
    dispatch(setIsOpen(false))
  }

  return (
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
        <Extra />
      </div>

      <div className="w-full flex  items-center py-3">
        <Count />
        <button
          onClick={addInCartHandler}
          className="btn shadow-btn-black-version py-2 w-full bg-transparent text-white font-bold"
        >
          Добавить
        </button>
      </div>
    </div>
  )
}

export default PanelPart
