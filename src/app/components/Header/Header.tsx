import { useState } from "react"
import { Link } from "react-router-dom"
import { useAppSelector } from "../../hooks"
import ToggleMenu from "./ToggleMenu"

const Header = () => {
  const [toggle, isToggle] = useState<boolean>(false)
  const { isAuthorization, cartProducts } = useAppSelector(
    (state) => state.userPofile
  )

  const totalItemInProducts = cartProducts.reduce(
    (acc, item) => acc + item.quantityProduct,
    0
  )
  return (
    <header>
      <div className="container wrapper py-12">
        <nav className="flex justify-between relative">
          <Link to="/">
            <img src="./img/logo.svg" alt="Logo" />
          </Link>

          <div className="flex items-center space-x-3 sm:space-x-12">
            <a
              className="flex items-center space-x-2 text-white bg-[#25D366] rounded-full py-2 px-2 sm:py-2 sm:px-4"
              href="/#"
            >
              <img src="./img/wa-white.svg" alt="Wa" />
              <span className="hidden sm:block">WhatsApp</span>
            </a>

            {totalItemInProducts > 0 ? (
              <Link
                to="/cart"
                className="hidden text-lg text-black py-2 px-7 font-bold shadow md:block"
              >
                Заказать
                <span className="text-orange"> {totalItemInProducts} </span>
                {totalItemInProducts === 1 ? "блюдо" : "блюд"}
              </Link>
            ) : (
              <></>
            )}

            <div className="relative">
              <button
                className="shadow py-3 px-4"
                onClick={() => isToggle((i) => !i)}
              >
                <img src="./img/profile.svg" alt="Profile" />
              </button>
            </div>

            <ToggleMenu
              isAuthorization={isAuthorization}
              isOpen={toggle}
              isToggle={isToggle}
            />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
