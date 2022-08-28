import React from "react"
import { Link } from "react-router-dom"
import Title from "../../components/Title/Title"

const Address = () => {
  return (
    <main className="container wrapper">
      <section>
        <div className="flex flex-col py-8">
          {/* <!-- title --> */}
          <Title toPath="/" titleName="Мои адреса" />

          {/* Cards wrapper */}
          <div className="flex flex-wrap flex-col items-center md:items-start space-y-6 space-x-0 md:space-y-0 md:space-x-6 md:flex-nowrap mb-8 md:flex-row p-2 sm:p-8">
            {/* item 1 */}
            <div className="w-full h-[170px] rounded-xl shadow-toorder-panel-block sm:w-[360px]">
              <div className="h-full flex flex-col justify-between p-6 items-start text-2xl">
                <h1 className="font-bold">Дом</h1>
                <p className="text-sm">
                  Меркурий Сити Тауэр, кв./офис 62, этаж 25, Для охраны 62
                </p>
              </div>
            </div>

            {/* item 1 */}
            <div className="w-full h-[170px] rounded-xl shadow-toorder-panel-block sm:w-[360px]">
              <div className="h-full flex flex-col justify-between p-6 items-start text-2xl">
                <h1 className="font-bold">Работа</h1>
                <p className="text-sm">
                  Меркурий Сити Тауэр, кв./офис 62, этаж 25, Для охраны 62
                </p>
              </div>
            </div>
          </div>

          {/* button */}

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
    </main>
  )
}

export default Address
