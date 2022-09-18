import { Link } from "react-router-dom"
import Title from "../../components/Title/Title"
import Wrapper from "../../components/Wrapper/Wrapper"
import { useAppSelector } from "../../hooks/rtkHooks"
import Item from "./Item"

const Address = () => {
  const { addressData } = useAppSelector((state) => state.addresses)

  return (
    <Wrapper>
      <section>
        <div className="flex flex-col py-8">
          <Title toPath="/" titleName="Мои адреса" />
          <div className="flex flex-wrap flex-col items-center md:items-start space-y-6 space-x-0 md:space-y-0 md:space-x-6 md:flex-nowrap mb-8 md:flex-row p-2 sm:p-8">
            {addressData && addressData.map((item) => <Item {...item} />)}
          </div>

          <div className="px-6   sm:px-12">
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
