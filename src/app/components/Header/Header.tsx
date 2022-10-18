import { useState } from "react"
import { Link } from "react-router-dom"
import { BsCart2 } from "react-icons/bs"

import { useAppSelector } from "../../hooks"
import ToggleMenu from "./ToggleMenu"

const Header = () => {
  const [toggle, isToggle] = useState<boolean>(false)
  const { isAuthorization } = useAppSelector((state) => state.userPofile)

  const { cartProducts } = useAppSelector((state) => state.cart)

  const totalItemInProducts = cartProducts.reduce(
    (acc, item) => acc + item.quantityProduct,
    0
  )
  return (
    <header className="sticky top-0 z-50 bg-gray shadow-lg">
      <div className="container wrapper py-4">
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
                className="relative flex text-lg text-black py-2 px-4 mr-2 font-bold shadow"
              >
                <BsCart2 size={24} />
                <span className="text-orange text-md">
                  {totalItemInProducts}{" "}
                </span>
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
