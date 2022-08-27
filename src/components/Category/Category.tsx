import React, { useState } from "react"

const Category = () => {
  const [open, isOpen] = useState<boolean>(false)

  return (
    <section className="pt-2">
      <div className="w-full flex flex-col py-4">
        <div className="hidden  flex-col items-center md:flex md:flex-row lg:mb-0 lg:items-center py-2 z-[5]">
          <button className="btn-category shadow-btn-active">Любимое</button>
          <button className="btn-category">Закуски</button>
          <button className="btn-category">Салаты</button>
          <button className="btn-category">Горячее</button>
          <button className="btn-category">Супы</button>
          <button className="btn-category">Десткое</button>
          <button className="btn-category">Десерты</button>
          <button className="btn-category">Напитки</button>
        </div>

        {/* Dropdown menu */}

        <button
          onClick={() => isOpen(!open)}
          className="w-[70%] mx-auto py-3 px-7 bg-slate-400 md:hidden"
        >
          Категорий
        </button>

        <div
          className={`${
            open ? `block` : `hidden`
          } w-[70%] mx-auto bg-slate-500 md:hidden`}
        >
          <ul>
            <li>Любимое</li>
            <li>Салаты</li>
            <li>Закуски</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Category
