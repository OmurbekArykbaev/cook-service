import React from "react"
import CartItem from "../components/CartItem/CartItem"
import Title from "../components/Title/Title"
import Wrapper from "../components/Wrapper/Wrapper"

const Cart = () => {
  return (
    <Wrapper>
      <section>
        <div className="flex flex-col py-8">
          {/* <!-- title --> */}
          <Title titleName="5 блюд на сумму 1200" toPath="/" />
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
    </Wrapper>
  )
}

export default Cart
