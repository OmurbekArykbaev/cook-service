import { FC } from "react"
import { BiError } from "react-icons/bi"

type Props = {
  message?: string
}

const Banner: FC<Props> = ({ message }) => {
  return (
    <div className="w-full flex  items-center">
      <div className="flex py-4">
        {message ? (
          <h1 className="text-xl text-red-600 text-left mr-2 p-1">{message}</h1>
        ) : (
          <h1 className="text-xl text-red-600 mr-2 p-1 ">
            Соединение с сервером потеряна
          </h1>
        )}
        <BiError size={28} color={"red"} />
      </div>
    </div>
  )
}

export default Banner
