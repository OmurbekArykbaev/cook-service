import { FC } from "react"
import Count from "../ui/Count/Count"
import FoodData from "../../types/FoodData"

const FoodCard: FC<FoodData> = ({
  id,
  name,
  image,
  description,
  category,
  price,
  cal,
}) => {
  return (
    <div className="card-food">
      {/* <!-- Image part --> */}
      <div className="card-food-img">
        <div className="absolute top-5 left-5">
          <button>
            <img src="./img/Vector.svg" alt="Save" />
          </button>
        </div>

        <img src={image} alt="Dish" />

        <div className="absolute flex justify-center items-center bottom-[-10px] left-5 rounded-full p-1 bg-white shadow-chilli">
          <button>
            <img src="./img/chilli.png" alt="Hot" />
          </button>
        </div>
      </div>

      {/* <!-- Text content part --> */}
      <div className="min-h-[280px] flex flex-col justify-around items-start p-4 border border-white/50 rounded-br-[40px] rounded-bl-[40px] group-hover:bg-black transition-all duration-150">
        <h4 className="font-bold text-xl group-hover:text-white">{name}</h4>

        <ul className="flex items-center w-full py-3">
          <li className="text-sm text-[#21262980]  mr-4 group-hover:text-white">
            {cal.gram} г
          </li>

          <li className="text-sm text-[#21262980] list-disc list-inside mr-4 group-hover:text-white">
            {cal.calories} ккал
          </li>
          <li className="text-sm text-[#212629100] list-disc list-inside  mr-4 group-hover:text-white">
            {price} Р
          </li>
        </ul>

        <p className="text-lg text-[#21262999] leading-5 py-3 group-hover:text-white">
          {description}
        </p>

        <div className="w-full flex items-center py-3">
          <Count />

          <button className="btn py-2 w-[70%] text-orange font-bold  group-hover:bg-[#212629] group-hover:shadow-black">
            Добавить
          </button>
        </div>
      </div>
    </div>
  )
}

export default FoodCard
