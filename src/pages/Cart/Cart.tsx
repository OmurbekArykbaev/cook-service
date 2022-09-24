import React from "react"
import CartItem from "../../components/CartItem/CartItem"
import Title from "../../components/Title/Title"
import Wrapper from "../../components/Wrapper/Wrapper"
import { useAppSelector } from "../../hooks/rtkHooks"

const Cart = () => {
  const cartProducts = useAppSelector((state) => state.userPofile.cartProducts)
  const sum = cartProducts.reduce(
    (acc, item) => acc + item.price * item.quantityProduct,
    0
  )
  const quantity = cartProducts.reduce(
    (acc, item) => acc + item.quantityProduct,
    0
  )

  return (
    <Wrapper>
      <section>
        <div className="flex flex-col py-8">
          {quantity ? (
            <Title
              titleName={`${quantity} блюд на сумму ${sum} сом`}
              toPath="/"
            />
          ) : (
            <Title titleName={`Вернуться к покупкам`} toPath="/" />
          )}

          <ul className="flex flex-col p-3 md:p-12 w-full">
            {cartProducts &&
              cartProducts.map((item) => <CartItem product={item} />)}
          </ul>

          <div className="flex justify-center w-full md:px-12 py-3 mb-12  md:justify-start">
            {sum !== 0 && (
              <button className="w-full btn text-xl text-orange font-bold px-0 py-4 md:px-7 md:w-auto md:text-lg lg:px-6 lg:py-2">
                Оформить доставку за {sum} сом
              </button>
            )}
          </div>
        </div>
      </section>
    </Wrapper>
  )
}

export default Cart
