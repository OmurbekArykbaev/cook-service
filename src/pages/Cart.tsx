import React from "react"
import CartItem from "../components/CartItem/CartItem"

const Cart = () => {
  return (
    <main>
      <section>
        <div className="container wrapper">
          <div className="flex flex-col py-8">
            {/* <!-- title --> */}
            <div className="flex w-full mb-8 lg:mb-0">
              <button className="mr-6">
                <img src="./img/arrow.png" alt="" />
              </button>
              <h1 className="text-[#212629] font-bold text-2xl sm:text-4xl">
                5 блюд на 2 530₽
              </h1>
            </div>
            {/* <!-- item wrapper --> */}
            <ul className="flex flex-col p-3 md:p-12 w-full">
              <CartItem />
              <CartItem />
            </ul>
            {/* <!-- button to order --> */}
            <div className="flex justify-center w-full px-12 py-3 mb-24  md:justify-start">
              <button className="btn text-xl font-bold px-7 py-4 md:text-lg lg:px-6 lg:py-2">
                Оформить доставку за 2 530₽
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Cart
