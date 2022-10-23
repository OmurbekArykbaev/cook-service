import { useAppDispatch } from "../../hooks"
import React, { FC } from "react"
import { Link } from "react-router-dom"

import { logOut } from "../../redux"

type Props = {
  isAuthorization: boolean
  isOpen: boolean
  isToggle: React.Dispatch<React.SetStateAction<boolean>>
}

const ToggleMenu: FC<Props> = ({ isAuthorization, isOpen, isToggle }) => {
  const dispatch = useAppDispatch()

  const userLogOutHandler = () => {
    dispatch(logOut())
  }

  if (isOpen) {
    return (
      <div
        className={`${isOpen} blur-none bg-[#E9E9E9] rounded-2xl p-3 max-w-[300px] absolute top-14 -right-5 shadow-mobile-menu z-30 sm:right-0`}
      >
        <div className="flex justify-end py-2 pr-4">
          <button id="profile-close-btn" onClick={() => isToggle(false)}>
            <img src="./img/close.svg" alt="" />
          </button>
        </div>

        <ul className="w-full flex flex-col" onClick={() => isToggle(false)}>
          {!isAuthorization && (
            <>
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
              {/* <li className="p-3 border-t-2 border-white">
                <Link to="/cards" className="flex items-center">
                  <img className="mr-3" src="./img/item3.svg" alt="" />
                  <h4>Привязанные карты</h4>
                </Link>
              </li> */}
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
                <button
                  onClick={userLogOutHandler}
                  className="flex items-center"
                >
                  <img className="mr-3" src="./img/item6.svg" alt="" />
                  <h4>Выйти</h4>
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    )
  } else {
    return <></>
  }
}

export default ToggleMenu
