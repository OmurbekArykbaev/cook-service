import { FC, useEffect, useState } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { BsTrash } from "react-icons/bs"

import { useAppDispatch, useAppSelector } from "../../hooks"
import { changeCountProduct, removeProduct } from "../../redux"
import { IProductInCart } from "@base/app/types"
import { PushToast } from "./../../components"

interface Props {
  product: IProductInCart
}

const CartItem: FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch()
  const { image, name, id, price } = product
  const [productFromStore] = useAppSelector((state) =>
    state.cart.cartProducts.filter((item) => item.id === id)
  )
  const [countQuantity, setCountQuantity] = useState<number>(
    productFromStore.quantityProduct
  )

  useEffect(() => {
    dispatch(changeCountProduct({ id, quan: countQuantity }))
  }, [countQuantity, dispatch, id])

  const incrementHandler = () => {
    setCountQuantity((countQuantity) => countQuantity + 1)
  }

  const deleteProductHandler = () => {
    dispatch(removeProduct({ id }))
    PushToast(`Продукт ${name} был удален из корзины!`, 1000)
  }

  const decrementHandler = () => {
    setCountQuantity((countQuantity) => countQuantity - 1)
    if (countQuantity < 2) setCountQuantity(1)
  }

  return (
    <li className="p-3 sm:p-6 bg-[#FFFFFF66] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[5px] mb-3">
      <div className=" flex flex-col md:flex-row md:items-center md:justify-between">
        {/* <!-- title, img --> */}
        <div className="flex w-full border-b  md:border-b-0  pb-6 md:pb-0">
          <div className="flex justify-center items-center mr-6 min-w-[30px]  md:max-w-[60px] bg-orange">
            <img src={image} alt={name} />
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-xl md:text-3xl">{name}</h3>
            {/* {product.extra && (
              <p className="text-sm text-zinc-400">{product.extra.join(" ")}</p>
            )} */}
          </div>
        </div>

        {/* <!-- quan and price --> */}
        <div className="relative w-auto flex justify-between  items-center pt-6 md:w-[30%] md:pt-0 md:justify-start">
          <div className="flex items-center border border-white rounded-full text-xl mr-5">
            <button
              className="px-2 py-1 group-hover:text-white"
              onClick={incrementHandler}
            >
              <AiOutlinePlus size={16} />
            </button>
            <span className="px-2 py-1  text-sm group-hover:text-white">
              {productFromStore.quantityProduct}
            </span>
            <button
              onClick={decrementHandler}
              className="px-2 py-1 group-hover:text-white"
            >
              <AiOutlineMinus size={16} />
            </button>
          </div>

          <h3 className="text-lg pr-8 leading-4 font-bold">
            {price * countQuantity} сом
          </h3>

          <button
            onClick={deleteProductHandler}
            className="absolute right-0 py-1"
          >
            <BsTrash />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
