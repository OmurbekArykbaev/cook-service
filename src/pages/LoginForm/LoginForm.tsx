import React from "react"
import { MdOutlineRemoveCircle } from "react-icons/md"
import Title from "../../components/Title/Title"
import Wrapper from "../../components/Wrapper/Wrapper"

const LoginForm = () => {
  return (
    <Wrapper>
      <section>
        <div className="flex flex-col py-8">
          {/* <!-- title --> */}
          <Title toPath="/" titleName="Войти" />

          {/* Form wrapper */}
          <div className="flex flex-wrap flex-col items-center">
            <form className="w-full flex flex-col space-y-5 md:space-y-9">
              {/* input 1 */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm text-textGray" htmlFor="address">
                  Название адреса
                </label>
                <input
                  className="input-items-address"
                  type="text"
                  name="address"
                />
              </div>

              {/* input 2 */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm text-textGray" htmlFor="address">
                  Ваша башня
                </label>
                <input
                  className="input-items-address"
                  type="text"
                  name="address"
                />
              </div>

              {/* buttons */}
              <div className='flex justify-between space-x-8  sm:px-12"'>
                <button className="w-full btn font-bold py-4 px-6 md:py-2 md:w-[30%]">
                  Сохранить
                </button>
                <button className="text-black text-lg">
                  <p className="hidden md:block">Удалить адрес</p>{" "}
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

export default LoginForm
