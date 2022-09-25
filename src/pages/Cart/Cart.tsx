import React from "react"
import { Link, useNavigate } from "react-router-dom"
import CartItem from "../../components/CartItem/CartItem"
import Title from "../../components/Title/Title"
import Wrapper from "../../components/Wrapper/Wrapper"
import { useAppSelector } from "../../hooks/rtkHooks"

const Cart = () => {
  const navigate = useNavigate()
  const { cartProducts, addresses } = useAppSelector(
    (state) => state.userPofile
  )
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
              cartProducts.map((item) => (
                <CartItem key={item.id} product={item} />
              ))}
          </ul>

          <div className="flex justify-center w-full md:px-12 py-3 mb-12  md:justify-start">
            {sum !== 0 && (
              <button
                onClick={() =>
                  navigate(`${addresses.length > 0 ? `/order` : `/addresses`}`)
                }
                className="w-full btn text-xl text-orange font-bold px-0 py-4 md:px-7 md:w-auto md:text-lg lg:px-6 lg:py-2"
              >
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
