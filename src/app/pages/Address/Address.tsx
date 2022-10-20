import { Link } from "react-router-dom"

import { Title, Wrapper } from "../../components"
import { useAppSelector } from "../../hooks"
import Item from "./Item"

const Address = () => {
  const { addresses } = useAppSelector((state) => state.address)

  return (
    <Wrapper>
      <section>
        <div className="flex flex-col py-8">
          <Title toPath="/" titleName="Мои адреса" />
          <div className="grid grid-cols-1 gap-6 justify-items-center py-4 mb-8 md:grid-cols-2 xl:grid-cols-3">
            {addresses &&
              addresses.map((item) => <Item key={item.id} {...item} />)}

            {/* If addresses dont have items */}
            {addresses.length === 0 && <h1>Нет адрессов</h1>}
          </div>

          <div className="px-6 sm:px-12">
            <Link
              to="/addresses"
              className="w-full btn font-bold py-4 px-6 md:py-2 md:w-[30%]"
            >
              Добавить адреса
            </Link>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}

export default Address
