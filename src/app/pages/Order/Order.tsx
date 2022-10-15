import { PushToast } from "../../components/Toast"
import moment from "moment"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Title, Wrapper } from "../../components"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { addOrder, removeFoodInCart } from "../../redux/userSlice"
import { IAddressData } from "../../types/userProfile"

const Order = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { addresses, cartProducts } = useAppSelector(
    (state) => state.userPofile
  )
  const [filter, setFilter] = useState<string>(addresses[0].street)
  const [dataAddress, setDataAddress] = useState<IAddressData[] | undefined>()

  const totalSum = cartProducts.reduce(
    (acc, item) => acc + item.quantityProduct * item.price,
    0
  )

  const createOrderHandler = () => {
    const dateFormat = moment().format("DD-MM-YYYY HH:mm")
    navigate("/shipping")

    const id = Date.now()

    dispatch(
      addOrder({
        id,
        date: String(dateFormat),
        totalSum: totalSum > 500 ? totalSum : totalSum + 200,
        deliveryPrice: totalSum > 500 ? 0 : 200,
        status: "current",
        address: dataAddress ? { ...dataAddress[0] } : {},
        foods: cartProducts,
      })
    )

    PushToast(`Заказ под номером ${id} в обработке.`, 5000)

    cartProducts.forEach((item) => dispatch(removeFoodInCart({ id: item.id })))
  }

  useEffect(() => {
    setDataAddress(addresses.filter((item) => item.street === filter))
  }, [addresses, filter])

  return (
    <Wrapper>
      <section>
        <div className="flex flex-col py-8">
          <Title toPath="/" titleName="Оформление заказа" />
          <div className="flex justify-center items-center flex-wrap px-6 sm:justify-start sm:flex-nowrap sm:px-12">
            {addresses &&
              addresses.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setFilter(item.street)}
                  className={`btn ${
                    item.street === filter ? `shadow-btn-active` : ``
                  } mb-4 sm:mb-0`}
                >
                  {item.street}
                </button>
              ))}
          </div>

          {/* //   <!-- panel & comment wrapper --> */}

          <div className=" flex flex-col p-6 lg:flex-row lg:justify-between sm:p-12 w-full">
            <div className="w-full  mb-5  lg:mb-0   lg:w-[30%]">
              {dataAddress && (
                <div className="w-full p-5 mb-4 rounded-xl shadow-toorder-panel-block">
                  <h1 className="font-bold text-xl mb-5">
                    {dataAddress[0].street}
                  </h1>
                  <p className="text-sm">
                    {`Улица: ${dataAddress[0].street}. Дом: ${dataAddress[0].houseNumber}.`}
                    <br />
                    {` Квартира: ${dataAddress[0].flatOffice}. Подъезд: ${dataAddress[0].entrance}. Этаж: ${dataAddress[0].floor}. Домофон/охрана: ${dataAddress[0].callDoor}`}
                  </p>
                </div>
              )}

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
            <button
              onClick={createOrderHandler}
              className="w-full btn font-bold py-4 px-6 md:py-2 md:w-[30%]"
            >
              Заказать
            </button>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}

export default Order
