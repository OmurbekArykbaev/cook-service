import React from "react"

const ImagePart = () => {
  return (
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
  )
}

export default ImagePart
