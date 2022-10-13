import React, { FC, ReactNode } from "react"

type Props = {
  title: string
  data?: string | number
  node?: ReactNode
}

const Row: FC<Props> = ({ title, data, node }) => {
  return (
    <div className="flex justify-center items-center  w-full border p-1">
      <strong className="flex-[1] p-1 text-center">{title}:</strong>
      <p className="flex-[1] text-center  p-1 ml-1">{data ? data : node}</p>
    </div>
  )
}

export default Row
