import { useAppDispatch, useAppSelector } from "../../hooks"
import ImagePart from "./ImagePart"
import PanelPart from "./PanelPart"

const PushUpOrder = () => {
  const data = useAppSelector((state) => state.globalChanges.isOpen)

  if (!data) {
    return null
  }

  return (
    <div className="fixed top-7 left-5 lg:left-[50%] lg:-translate-x-2/4 z-50">
      <div className="flex flex-col max-w-[770px] mr-6 mb-6">
        <ImagePart />
        <PanelPart />
      </div>
    </div>
  )
}

export default PushUpOrder
