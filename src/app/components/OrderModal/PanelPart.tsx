import { FC } from "react"

import { useAppDispatch } from "../../hooks"
import { removeProductInModal, setIsOpen } from "../../redux"
import Count from "./Count"
import { PushToast } from "../Toast"
import { IProductInCart } from "@base/app/types"
import { addFoodInCart } from "../../redux/userSlice"

const PanelPart: FC<IProductInCart> = (props) => {
  const { id, name, cal, description, price, quantityProduct } = props
  const dispatch = useAppDispatch()

  const addInCartHandler = () => {
    dispatch(setIsOpen(false))
    dispatch(addFoodInCart(props))
    dispatch(removeProductInModal())
    PushToast(`Блюдо "${name}" добавлено в корзину`, 1000)
  }

  return (
    <div className="flex flex-col items-start bg-[#212629] p-6 sm:p-12 border border-white/50 rounded-br-[40px] rounded-bl-[40px]">
      <h4 className="font-bold text-lg sm:text-xl text-white">{name}</h4>
      <div className="flex items-center w-full py-3">
        <span className="text-[10px] sm:text-sm text-white mr-4">
          {cal.gram} г
        </span>
        <span className="text-[10px] sm:text-sm text-white mr-4">
          {cal.calories} ккал
        </span>
        <span className="text-[10px] sm:text-sm text-white mr-4">
          {price} сом
        </span>
      </div>
      <p className="text-sm sm:text-lg text-white leading-5 py-3">
        {description}
      </p>

      {/* <div className="flex flex-col py-3 w-[100%] "></div> */}

      <div className="w-full flex  items-center py-3">
        <Count id={id} quanFromStore={quantityProduct} />
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
