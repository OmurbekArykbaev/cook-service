import React from "react"

const Header = () => {
  return (
    <header>
      <div className="container wrapper py-12">
        {/* <!-- Navbar --> */}
        <nav className="flex justify-between relative">
          {/* <!-- Logo --> */}
          <a href="./order.html">
            <img src="./img/logo.svg" alt="Logo" />
          </a>

          {/* <!-- Panel --> */}
          <div className="flex items-center space-x-3 sm:space-x-12">
            <a
              className="flex items-center space-x-2 text-white bg-[#25D366] rounded-full py-2 px-2 sm:py-2 sm:px-4"
              href="/#"
            >
              <img src="./img/wa-white.svg" alt="Wa" />
              <span className="hidden sm:block">WhatsApp</span>
            </a>

            <a
              href="./cart.html"
              className="hidden text-lg text-black py-2 px-7 font-bold shadow md:block"
            >
              Заказать 1 блюда за 430Р
            </a>

            <div className="relative">
              <button id="profile-btn" className="shadow py-3 px-4">
                <img src="./img/profile.svg" alt="Profile" />
              </button>
            </div>
          </div>

          {/* <!-- menu profile --> */}
          <div
            id="profile-menu"
            className="hidden blur-none bg-[#E9E9E9] rounded-2xl p-3 max-w-[300px] absolute top-14 -right-5 shadow-mobile-menu z-30 sm:right-0"
          >
            <div className="flex justify-end py-2 pr-4">
              <button id="profile-close-btn">
                <img src="./img/close.svg" alt="" />
              </button>
            </div>

            <ul className="w-full flex flex-col">
              <li className="p-3 border-t-2 border-white">
                <a href="/#" className="flex items-center">
                  <img className="mr-3" src="./img/item1.svg" alt="" />
                  <h4>Мои заказы</h4>
                </a>
              </li>

              <li className="p-3 border-t-2 border-white">
                <a href="/#" className="flex items-center">
                  <img className="mr-3" src="./img/item2.svg" alt="" />
                  <h4>Депозит</h4>
                </a>
              </li>
              <li className="p-3 border-t-2 border-white">
                <a href="/#" className="flex items-center">
                  <img className="mr-3" src="./img/item3.svg" alt="" />
                  <h4>Привязанные карты</h4>
                </a>
              </li>

              <li className="p-3 border-t-2 border-white">
                <a href="/#" className="flex items-center">
                  <img className="mr-3" src="./img/item4.svg" alt="" />
                  <h4>Мои адреса</h4>
                </a>
              </li>

              <li className="p-3  border-t-2 border-white">
                <a href="/#" className="flex items-center">
                  <img className="mr-3" src="./img/item5.svg" alt="" />
                  <h4>Мои данные</h4>
                </a>
              </li>
              <li className="p-3  border-t-2 border-white">
                <a href="/#" className="flex items-center">
                  <img className="mr-3" src="./img/item6.svg" alt="" />
                  <h4>Выйти</h4>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
