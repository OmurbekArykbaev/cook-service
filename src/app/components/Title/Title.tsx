import React, { FC } from "react"
import { MdOutlineKeyboardBackspace } from "react-icons/md"
import { Link } from "react-router-dom"

interface TitleProps {
  toPath: string
  titleName: string
}

const Title: FC<TitleProps> = ({ toPath = "/", titleName = "Назад" }) => {
  return (
    <div className="flex items-center w-full pb-8  lg:mb-0">
      <Link to={toPath} className="mr-6">
        <MdOutlineKeyboardBackspace size={30} />
      </Link>
      <h1 className="text-[#212629] font-bold text-2xl sm:text-4xl">
        {titleName}
      </h1>
    </div>
  )
}

export default Title
