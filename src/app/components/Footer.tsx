import React from "react"

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="container wrapper">
        <div className="flex w-full flex-col items-center py-10 lg:flex-row lg:justify-between lg:items-center">
          <ul className="items w-full lg:w-auto">
            <li className="item">
              <a className="item-link text-[#25D366]" href="/#">
                <img className="mr-3" src="./img/wa.svg" alt="" />
                <span>WhatsApp</span>
              </a>
            </li>
            <li className="item">
              <a className="item-link" href="/#">
                <img className="mr-3" src="./img/phone.svg" alt="" />
                <span>+996 707-360-640</span>
              </a>
            </li>
            <li className="item">
              <a className="item-link" href="/#">
                <img className="mr-3" src="./img/mail.svg" alt="" />
                <span>Написать на E-mail</span>
              </a>
            </li>
          </ul>

          <ul className="items w-full lg:w-auto">
            <li className="item">
              <a className="item-link" href="/#">
                <img className="mr-3" src="./img/food.svg" alt="" />
                <span>Меню для частных клиентов</span>
              </a>
            </li>
            <li className="item">
              <a className="item-link" href="/#">
                <img className="mr-3" src="./img/marsh.svg" alt="" />
                <span>Меню для корпоративных заказов</span>
              </a>
            </li>
            <li className="item">
              <a className="item-link" href="/#">
                <img className="mr-3" src="./img/bike.svg" alt="" />
                <span>О доставке</span>
              </a>
            </li>
          </ul>

          <ul className="items w-full lg:w-auto">
            <li className="item">
              <a className="item-link" href="/#">
                <img className="mr-3" src="./img/doc.svg" alt="" />
                <span>Политика конфиденциальности</span>
              </a>
            </li>
            <li className="item">
              <a className="item-link" href="/#">
                <img className="mr-3" src="./img/sign.svg" alt="" />
                <span>Пользовательское соглашение</span>
              </a>
            </li>
            <li className="item">© 2022 COOOK service</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
