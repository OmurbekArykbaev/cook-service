import React from "react"
import { Link } from "react-router-dom"
import { MdOutlineRemoveCircle } from "react-icons/md"

const Payment = () => {
  return (
    <main className="container wrapper">
      <section>
        <div className="flex flex-col py-8">
          {/* <!-- title --> */}

          <div className="flex items-center w-full pb-8  lg:mb-0">
            <Link to="/address" className="mr-6">
              <img src="./img/arrow.png" alt="Back Arrow" />
            </Link>
            <h1 className="text-[#212629] font-bold text-2xl sm:text-4xl">
              Visa
            </h1>
          </div>

          {/* Form wrapper */}
          <div className="flex flex-wrap flex-col items-center">
            <form className="w-full flex flex-col space-y-5 md:space-y-9">
              {/* 2 input wrapper */}
              <div className="max-w-[570px] flex flex-col space-y-5 lg:items-center lg:space-y-0 lg:space-x-8 lg:flex-row">
                {/* input 1 */}
                <div className="lg:w-[90%] w-auto  flex flex-col space-y-2">
                  <label className="text-sm text-textGray" htmlFor="address">
                    Номер карты
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
                    Действительна до
                  </label>
                  <input
                    className="input-items-address"
                    type="text"
                    name="address"
                  />
                </div>
              </div>

              {/* 2 input wrapper */}
              <div className="max-w-[570px] flex flex-col space-y-5 lg:items-center lg:space-y-0 lg:space-x-8 lg:flex-row">
                {/* input 1 */}
                <div className="lg:w-[90%] w-auto  flex flex-col space-y-2">
                  <label className="text-sm text-textGray" htmlFor="address">
                    Имя держателя карты
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
                    CVC2/CVV2
                  </label>
                  <input
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
                  <p className="hidden md:block">Удалить карту</p>{" "}
                  <MdOutlineRemoveCircle className="md:hidden" size={35} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Payment
