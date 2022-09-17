import React, { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/rtkHooks"
import { filterByCategory } from "../../pages/Home/allFoodSlice"
import { TCategory } from "../../types/FoodData"
import Button from "./Button"
import { filtered } from "./categorySlice"

const dataCategory = [
  { id: 1, title: "Любимое", path: "liked" },
  { id: 2, title: "Закуски", path: "zak" },
  { id: 3, title: "Салаты", path: "sal" },
  { id: 4, title: "Горячее", path: "gor" },
  { id: 5, title: "Супы", path: "soup" },
  { id: 6, title: "Десткое", path: "det" },
  { id: 7, title: "Десерты", path: "des" },
  { id: 8, title: "Напитки", path: "nap" },
]

const Category = () => {
  const [open, isOpen] = useState<boolean>(false)
  const { filterState } = useAppSelector((state) => state.allFoodData)
  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(filtered("salad"))
  // }, [dispatch])

  const onClickDispatch = (path: string): void => {
    dispatch(filterByCategory(path))
  }

  return (
    <section className="pt-2">
      <div className="w-full flex flex-col py-4">
        <div className="hidden  flex-col items-center md:flex md:flex-row lg:mb-0 lg:items-center py-2 z-[5]">
          {dataCategory.map((item) => (
            <Button
              title={item.title}
              activeFocus={filterState === item.path}
              onClickHandler={() => onClickDispatch(item.path)}
            />
          ))}
          {/* <button
            className="btn-category shadow-btn-active"
            onClick={() => dispatch(filterByCategory("sal"))}
          >
            Любимое
          </button>
          <button
            className="btn-category"
            onClick={() => dispatch(filterByCategory("zak"))}
          >
            Закуски
          </button>
          <button
            className="btn-category"
            onClick={() => dispatch(filterByCategory("soup"))}
          >
            ceg
          </button> */}
          {/*
          <button className="btn-category">Салаты</button>
          <button className="btn-category">Горячее</button>
          <button className="btn-category">Супы</button>
          <button className="btn-category">Десткое</button>
          <button className="btn-category">Десерты</button>
          <button className="btn-category">Напитки</button> */}
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
