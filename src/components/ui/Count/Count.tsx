import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

const Count = () => {
  return (
    <div className="flex items-center border border-white rounded-full text-xl mr-5">
      <button className="px-2 py-1 group-hover:text-white">
        <AiOutlinePlus size={16} />
      </button>

      <span className="px-2 py-1  text-sm group-hover:text-white">3</span>

      <button className="px-2 py-1 group-hover:text-white">
        <AiOutlineMinus size={16} />
      </button>
    </div>
  )
}

export default Count
