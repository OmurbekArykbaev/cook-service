import React from "react"

const FoodCard = () => {
  return (
    <div className="card-food">
      {/* <!-- Image part --> */}
      <div className="card-food-img">
        <div className="absolute top-5 left-5">
          <button>
            <img src="./img/Vector.svg" alt="" />
          </button>
        </div>
        <img src="./img/dish.png" alt="Dish" />
        <div className="absolute flex justify-center items-center bottom-[-10px] left-5 rounded-full p-1 bg-white shadow-chilli">
          <button>
            <img src="./img/chilli.png" alt="" />
          </button>
        </div>
      </div>

      {/* <!-- Text content part --> */}
      <div className="flex flex-col items-start p-4 border border-white/50 rounded-br-[40px] rounded-bl-[40px] group-hover:bg-black transition-all duration-150">
        <h4 className="font-bold text-xl group-hover:text-white">
          Картофель с луком и белыми грибами
        </h4>
        <div className="flex items-center w-full py-3">
          <span className="text-sm text-[#21262980] mr-4 group-hover:text-white">
            320г
          </span>
          <span className="text-sm text-[#21262980] mr-4 group-hover:text-white">
            1040 ккал
          </span>
          <span className="text-sm text-[#212629100] mr-4 group-hover:text-white">
            430Р
          </span>
        </div>
        <p className="text-lg text-[#21262999] leading-5 py-3 group-hover:text-white">
          Это вкусное и сытное блюдо является любимым блюдом во многих семьях,
          полюбите его и вы.
        </p>
        <div className="w-full flex items-center py-3">
          <div className="flex items-center border border-white rounded-full text-xl mr-5">
            <button className="px-3 py-1 group-hover:text-white">-</button>
            <span className="px-2 py-1 text-sm group-hover:text-white">1</span>
            <button className="px-3 py-1 group-hover:text-white">+</button>
          </div>

          <button className="btn py-2 w-[70%] text-[#FE9102] font-bold  group-hover:bg-[#212629] group-hover:shadow-black">
            Добавить
          </button>
        </div>
      </div>
    </div>
  )
}

export default FoodCard
