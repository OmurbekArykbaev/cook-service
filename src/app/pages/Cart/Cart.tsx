import { useNavigate } from "react-router-dom"

import { CartItem, Title, Wrapper } from "../../components"
import { useAppSelector } from "../../hooks"

const Cart = () => {
  const navigate = useNavigate()
  const { isAuthorization } = useAppSelector((state) => state.userPofile)

  const { cartProducts } = useAppSelector((state) => state.cart)

  const { addresses } = useAppSelector((state) => state.address)

  const sum = cartProducts.reduce(
    (acc, item) => acc + item.price * item.quantityProduct,
    0
  )
  const quantity = cartProducts.reduce(
    (acc, item) => acc + item.quantityProduct,
    0
  )

  const checkIsAuthorization = () => {
    const hasAddresses = addresses.length > 0
    if (!isAuthorization) {
      navigate(`/login`)
    } else if (!hasAddresses) {
      navigate(`/addresses`)
    } else {
      navigate(`/order`)
    }
  }

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

          {cartProducts.length < 1 && (
            <h1 className="text-center">Корзина пуста </h1>
          )}

          <div className="flex justify-center w-full md:px-12 py-3 mb-12  md:justify-start">
            {sum !== 0 && (
              <button
                onClick={checkIsAuthorization}
                className="w-full btn text-lg text-orange font-bold px-0 py-4  md:px-7 md:w-auto md:text-xl lg:px-6 lg:py-2"
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
