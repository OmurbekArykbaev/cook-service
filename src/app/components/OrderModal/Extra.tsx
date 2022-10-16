import { useAppDispatch } from "../../hooks"
import { FC, useState } from "react"

type Props = {
  extra: string
}

const Extra: FC<Props> = ({ extra }) => {
  const [include, setInclude] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  const addExtraHandler = () => {
    setInclude((i) => !i)
  }

  return (
    <div className="flex justify-between  text-white text-lg py-1 px-3 sm:py-3 sm:px-5 mb-2 bg-[#00000040]  sm:rounded-tl-[30px] sm:rounded-tr-[30px] sm:rounded-br-[30px] sm:rounded-bl-[5px]">
      <h3>{extra}</h3>
      <div className="flex items-center">
        <span className="mr-3">+ 30сом</span>
        <button
          className={`border-4 ${
            include ? "bg-[#00000040]" : "bg-white"
          } border-white  w-5 h-5 rounded-full`}
          name="checkbox"
          id="checkbox"
          onClick={addExtraHandler}
        ></button>
      </div>
    </div>
  )
}

export default Extra
