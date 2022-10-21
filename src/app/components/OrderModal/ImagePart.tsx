import { FC } from "react"
import { AiOutlineClose } from "react-icons/ai"

import { useAppDispatch } from "../../hooks"
import {
  changeHotInProductInModal,
  removeProductInModal,
  setIsOpen,
} from "../../redux"

type Props = {
  id: string
  image: string
  isHot?: boolean
}

const ImagePart: FC<Props> = ({ image, id, isHot = false }) => {
  const dispatch = useAppDispatch()

  const closeModalHandler = () => {
    dispatch(setIsOpen(false))
    dispatch(removeProductInModal())
  }

  const addHotHandler = () => {
    dispatch(changeHotInProductInModal({ id, isHot: !isHot }))
  }

  return (
    <div className="relative flex justify-center lg:items-center bg-[#FE724B] max-h-[200px]  rounded-tl-[40px] rounded-tr-[40px]">
      <div className="absolute top-5 right-5">
        <button onClick={closeModalHandler}>
          <AiOutlineClose size={22} color="white" />
        </button>
      </div>

      <img className="h-[200px]" src={image} alt="Food" />

      <div
        className={`absolute flex justify-center items-center bottom-[-10px] left-10 rounded-full p-1 ${
          isHot && "border-2 border-red-900 animate-pulse"
        } bg-white shadow-chilli`}
      >
        <button onClick={addHotHandler}>
          <img src="./img/chilli.png" alt="Chilli" />
        </button>
      </div>
    </div>
  )
}

export default ImagePart
