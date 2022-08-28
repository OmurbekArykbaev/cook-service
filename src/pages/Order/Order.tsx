import React from "react"
import Title from "../../components/Title/Title"

const Order = () => {
  return (
    <main className="container wrapper">
      <section>
        <div className="flex flex-col py-8">
          {/* <!-- title --> */}

          <Title toPath="/" titleName="Оформление заказа" />

          {/* <!-- category --> */}

          <div className="flex justify-center items-center flex-wrap px-6 sm:justify-start sm:flex-nowrap sm:px-12">
            <button className="btn shadow-btn-active mb-4 sm:mb-0">Дом</button>
            <button className="btn mb-4 sm:mb-0">Работа</button>
            <button className="btn mb-4 sm:mb-0">Новый адрес</button>
          </div>

          {/* //   <!-- panel & comment wrapper --> */}

          <div className=" flex flex-col p-6 lg:flex-row lg:justify-between sm:p-12 w-full">
            {/* //   <!-- panel block--> */}

            <div className="w-full  mb-5  lg:mb-0   lg:w-[30%]">
              {/* <!-- home --> */}

              <div className="w-full p-5 mb-4 rounded-xl shadow-toorder-panel-block">
                <h1 className="font-bold text-xl mb-5">Дом</h1>
                <p className="text-sm">
                  Меркурий Сити Тауэр, кв./офис 62, этаж 25, Для охраны 62
                </p>
              </div>

              {/* <!-- pay --> */}

              <div className="flex flex-col justify-between items-center w-full p-5 mb-4 rounded-xl shadow-toorder-panel-block sm:flex-row">
                <div className="flex items-center mb-4 sm:mb-0">
                  <img className="mr-3" src="./img/pay.svg" alt="" />
                  <p>Оплата</p>
                </div>

                <div className="flex items-center">
                  <h1 className="mr-3 font-bold">**** 3456</h1>
                  <img src="./img/visa.svg" alt="" />
                </div>
              </div>

              {/* <!-- time --> */}

              <div className="flex flex-col justify-between items-center w-full p-5  rounded-xl shadow-toorder-panel-block sm:flex-row">
                <div className="flex items-center mb-4 sm:mb-0">
                  <img className="mr-3" src="./img/time.svg" alt="" />
                  <p>Когда</p>
                </div>
                <h1 className="font-bold">Как можно скорее</h1>
              </div>
            </div>

            {/* <!-- comment --> */}

            <div className="w-full   lg:w-[65%]">
              <textarea
                className="w-full h-full p-5 resize-none bg-inherit border rounded-xl border-white  text-black focus:outline-none text-sm sm:text-xl"
                placeholder="Комментарий (если есть)"
                name="comment"
                id=""
                cols={30}
                rows={5}
              />
            </div>
          </div>

          {/* <!-- button to order --> */}
          <div className="w-full px-6 sm:px-12">
            <button className="w-full btn font-bold py-4 px-6 md:py-2 md:w-[30%]">
              Заказать
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Order
