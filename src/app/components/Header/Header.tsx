import { useState } from "react"
import { Link } from "react-router-dom"
import { useAppSelector } from "../../hooks"

const Header = () => {
  const [toggle, isToggle] = useState<string>("hidden")
  const { isAuthorization } = useAppSelector((state) => state.userPofile)

  return (
    <header>
      <div className="container wrapper py-12">
        {/* <!-- Navbar --> */}
        <nav className="flex justify-between relative">
          {/* <!-- Logo --> */}
          <Link to="/">
            <img src="./img/logo.svg" alt="Logo" />
          </Link>

          {/* <!-- Panel --> */}
          <div className="flex items-center space-x-3 sm:space-x-12">
            <a
              className="flex items-center space-x-2 text-white bg-[#25D366] rounded-full py-2 px-2 sm:py-2 sm:px-4"
              href="/#"
            >
              <img src="./img/wa-white.svg" alt="Wa" />
              <span className="hidden sm:block">WhatsApp</span>
            </a>

            <Link
              to="/cart"
              className="hidden text-lg text-black py-2 px-7 font-bold shadow md:block"
            >
              Заказать 1 блюда за 430Р
            </Link>

            <div className="relative">
              <button
                className="shadow py-3 px-4"
                onClick={() => isToggle("block")}
              >
                <img src="./img/profile.svg" alt="Profile" />
              </button>
            </div>
          </div>

          {/* <!-- menu profile --> */}
          {/* Miss fix!!!!! */}
          <div
            className={`${toggle} blur-none bg-[#E9E9E9] rounded-2xl p-3 max-w-[300px] absolute top-14 -right-5 shadow-mobile-menu z-30 sm:right-0`}
          >
            <div className="flex justify-end py-2 pr-4">
              <button id="profile-close-btn" onClick={() => isToggle("hidden")}>
                <img src="./img/close.svg" alt="" />
              </button>
            </div>

            <ul className="w-full flex flex-col">
              {!isAuthorization && (
                <>
                  {" "}
                  <li className="p-3 border-t-2 border-white">
                    <Link to="/login" className="flex items-center">
                      <img className="mr-3" src="./img/item1.svg" alt="" />
                      <h4>Войти</h4>
                    </Link>
                  </li>
                </>
              )}

              {isAuthorization && (
                <>
                  {" "}
                  <li className="p-3 border-t-2 border-white">
                    <Link to="/orders" className="flex items-center">
                      <img className="mr-3" src="./img/item1.svg" alt="" />
                      <h4>Мои заказы</h4>
                    </Link>
                  </li>
                  <li className="p-3 border-t-2 border-white">
                    <Link to="/cards" className="flex items-center">
                      <img className="mr-3" src="./img/item3.svg" alt="" />
                      <h4>Привязанные карты</h4>
                    </Link>
                  </li>
                  <li className="p-3 border-t-2 border-white">
                    <Link to="/address" className="flex items-center">
                      <img className="mr-3" src="./img/item4.svg" alt="" />
                      <h4>Мои адреса</h4>
                    </Link>
                  </li>
                  <li className="p-3  border-t-2 border-white">
                    <Link to="/profile" className="flex items-center">
                      <img className="mr-3" src="./img/item5.svg" alt="" />
                      <h4>Мои данные</h4>
                    </Link>
                  </li>
                  <li className="p-3  border-t-2 border-white">
                    <Link to="/" className="flex items-center">
                      <img className="mr-3" src="./img/item6.svg" alt="" />
                      <h4>Выйти</h4>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
