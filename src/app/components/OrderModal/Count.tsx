import { useAppDispatch } from "../../hooks"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import React, { FC, useEffect, useState } from "react"
import { changeCountProductInModal } from "../../redux"

type Props = {
  id: string
  quanFromStore: number
}

const Count: FC<Props> = ({ id, quanFromStore }) => {
  const [countQuantity, setCountQuantity] = useState<number>(quanFromStore)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(changeCountProductInModal({ id, quan: countQuantity }))
  }, [countQuantity, dispatch, id])

  const incrementHandler = () => {
    setCountQuantity((countQuantity) => countQuantity + 1)
  }

  const decrementHandler = () => {
    setCountQuantity((countQuantity) => countQuantity - 1)
    if (countQuantity < 2) setCountQuantity(1)
  }

  return (
    <div className="flex items-center border border-white rounded-full text-xl mr-5 text-white">
      <button
        className="px-2 sm:px-5 py-2 font-bold"
        onClick={incrementHandler}
      >
        <AiOutlinePlus size={16} />
      </button>
      <span className="px-2 py-1 text-sm">{quanFromStore}</span>
      <button
        onClick={decrementHandler}
        className="px-2 sm:px-5 py-2 font-bold"
      >
        <AiOutlineMinus size={16} />
      </button>
    </div>
  )
}

export default Count
