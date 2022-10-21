import { FC } from "react"
import Banner from "./Banner"

type Props = {
  typeError: "Server" | "Local"
  message?: string
}

const Error: FC<Props> = ({ typeError, message }) => {
  if (typeError === "Server") {
    return <Banner message={message} />
  } else if (typeError === "Local") {
    return <>123</>
  } else {
    return null
  }
}

export default Error
