import React from "react"
import { Link } from "react-router-dom"
import CartItem from "../components/CartItem/CartItem"

const Cart = () => {
  return (
    <main className="container wrapper">
      <section>
        <div className="flex flex-col py-8">
          {/* <!-- title --> */}
          <div className="flex items-center w-full mb-8 lg:mb-0">
            <Link to="/" className="mr-6">
              <img src="./img/arrow.png" alt="" />
            </Link>
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
          <div className="flex justify-center w-full md:px-12 py-3 mb-12  md:justify-start">
            <button className="w-full btn text-xl text-orange font-bold px-0 py-4 md:px-7 md:w-auto md:text-lg lg:px-6 lg:py-2">
              Оформить доставку за 2 530₽
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Cart
