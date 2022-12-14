import { FC, useState } from "react"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

import { useAppDispatch } from "../../../hooks"
import { changeCountProduct } from "../../../redux"

interface ICountProps {
  id: string
}

const Count: FC<ICountProps> = ({ id }) => {
  const [count, setCount] = useState<number>(1)
  const dispatch = useAppDispatch()

  const incrementHandler = () => {
    setCount((count) => count + 1)
    dispatch(changeCountProduct({ id, quan: count + 1 }))
  }

  const decrementHandler = () => {
    setCount((count) => count - 1)
    if (count < 2) setCount(1)
    dispatch(changeCountProduct({ id, quan: count }))
  }
  return (
    <div className="flex items-center border border-white rounded-full text-xl mr-5">
      <button
        className="px-2 py-1 group-hover:text-white"
        onClick={incrementHandler}
      >
        <AiOutlinePlus size={16} />
      </button>

      <span className="px-2 py-1  text-sm group-hover:text-white">{count}</span>

      <button
        onClick={decrementHandler}
        className="px-2 py-1 group-hover:text-white"
      >
        <AiOutlineMinus size={16} />
      </button>
    </div>
  )
}

export default Count
