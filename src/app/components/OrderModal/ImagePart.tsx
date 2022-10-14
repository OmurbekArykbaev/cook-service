import { useAppDispatch, useAppSelector } from "../../hooks"
import React, { FC } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { removeProductInModal, setIsOpen } from "../../redux"

type Props = {
  image: string
}

const ImagePart: FC<Props> = ({ image }) => {
  const dispatch = useAppDispatch()

  const closeModalHandler = () => {
    dispatch(setIsOpen(false))
    dispatch(removeProductInModal())
  }

  return (
    <div className="relative flex justify-center lg:items-center bg-[#FE724B] h-[200px] md:h-[360px] rounded-tl-[40px] rounded-tr-[40px]">
      <div className="absolute top-5 left-5">
        <button>
          <img src="./img/Like.svg" alt="Like" />
        </button>
      </div>

      <div className="absolute top-5 right-5">
        <button onClick={closeModalHandler}>
          <AiOutlineClose size={22} color="white" />
        </button>
      </div>

      <img className="max-h-[360px]" src={image} alt="Food" />

      <div className="absolute flex justify-center items-center bottom-[-10px] left-10 rounded-full p-1 bg-white shadow-chilli">
        <button>
          <img src="./img/chilli.png" alt="Chilli" />
        </button>
      </div>
    </div>
  )
}

export default ImagePart
