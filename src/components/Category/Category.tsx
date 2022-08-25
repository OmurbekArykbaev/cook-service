import React from "react"

const Category = () => {
  return (
    <section className="pt-2">
      <div className="w-full flex flex-col py-4">
        <div className="flex flex-col items-center  md:flex-row lg:mb-0 lg:items-center py-2 z-[5]">
          <button className="btn-category shadow-btn-active">Любимое</button>
          <button className="btn-category">Закуски</button>
          <button className="btn-category">Салаты</button>
          <button className="btn-category">Горячее</button>
          <button className="btn-category">Супы</button>
          <button className="btn-category">Десткое</button>
          <button className="btn-category">Десерты</button>
          <button className="btn-category">Напитки</button>
        </div>
      </div>
    </section>
  )
}

export default Category
