import React from "react"
import { Link } from "react-router-dom"

const AddAddress = () => {
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
              Мои адреса
            </h1>
          </div>

          {/* Form wrapper */}
          <div className="flex flex-wrap flex-col items-center md:items-start space-y-6 space-x-0 md:space-y-0 md:space-x-6 md:flex-nowrap mb-8 md:flex-row p-2 sm:p-8">
            <form>
              {/* input 1 */}
              <div></div>

              {/* input 2 */}
              <div></div>

              {/* inputs wrapper  */}
              <div>
                {/* input 1 */}
                <div></div>
                {/* input 2 */}
                <div></div>
                {/* input 3 */}
                <div></div>
                {/* input 4 */}
                <div></div>
              </div>

              {/* textarea comment */}
              <div></div>

              {/* buttons */}
              <div className='px-6 sm:px-12"'>
                <button className="w-full btn font-bold py-4 px-6 md:py-2 md:w-[30%]">
                  Добавить адрес
                </button>
                <button>Удалить адрес</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AddAddress
