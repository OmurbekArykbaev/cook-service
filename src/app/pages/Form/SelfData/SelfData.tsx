import { useAppSelector } from "../../../hooks"
import { MdOutlineRemoveCircle } from "react-icons/md"
import { Title, Wrapper } from "../../../components"

const SelfData = () => {
  const { name, phone } = useAppSelector((state) => state.userPofile.userData)
  return (
    <Wrapper>
      <section>
        <div className="flex flex-col py-8">
          <Title toPath="/" titleName="Мои данные" />

          <div className="flex flex-wrap flex-col items-center">
            <form className="w-full flex flex-col space-y-5 md:space-y-9">
              {/* 2 input wrapper */}
              <div className="flex flex-col space-y-5 lg:items-center lg:space-y-0 lg:space-x-8 lg:flex-row">
                {/* input 1 */}
                <div className="flex lg:flex-1 flex-col space-y-2">
                  <label className="text-sm text-textGray" htmlFor="address">
                    Как вас зовут
                  </label>
                  <input
                    value={name}
                    className="input-items-address"
                    type="text"
                    name="address"
                  />
                </div>
                {/* input 2 */}
                <div className="flex flex-col space-y-2">
                  <label className="text-sm text-textGray" htmlFor="address">
                    Телефон
                  </label>
                  <input
                    value={phone}
                    className="input-items-address"
                    type="text"
                    name="address"
                  />
                </div>
              </div>

              {/* buttons */}
              <div className='flex justify-between space-x-8  sm:px-12"'>
                <button className="w-full btn font-bold py-4 px-6 md:py-2 md:w-[30%]">
                  Сохранить
                </button>
                <button className="text-black text-lg">
                  <p className="hidden md:block">Удалить аккаунт</p>{" "}
                  <MdOutlineRemoveCircle className="md:hidden" size={35} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}

export default SelfData
