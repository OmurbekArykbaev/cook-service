import { useAppSelector } from "../../hooks"
import ImagePart from "./ImagePart"
import PanelPart from "./PanelPart"

const PushUpOrder = () => {
  const isOpen = useAppSelector((state) => state.modalOrder.isOpen)
  const food = useAppSelector((state) => state.modalOrder.product)

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed top-7 left-5 lg:left-[50%] lg:-translate-x-2/4 z-50">
      <div className="flex flex-col max-w-[770px] mr-6 mb-6">
        <ImagePart
          image={food[0].image}
          id={food[0].id}
          isHot={food[0]?.isHot}
        />
        <PanelPart {...food[0]} />
      </div>
    </div>
  )
}

export default PushUpOrder
