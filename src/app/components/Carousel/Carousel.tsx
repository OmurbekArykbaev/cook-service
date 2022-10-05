import React from "react"

const Carousel = () => {
  return (
    <section
      id="carousel"
      className="shadow-carousel flex flex-col justify-start items-start mt-3 mb-24 pt-5 px-6 pb-44 w-full rounded-xl blur-none transition-all duration-500  bg-[#212629] z-[2]"
    >
      {/* wrapper  */}
      <div className="w-full h-full relative">
        {/* <!-- text --> */}
        <div className="flex flex-col items-start p-4 sm:items-center sm:p-8 lg:items-start">
          <h1 className=" font-bold text-[200%] text-left text-white mb-5  sm:text-5xl sm:leading-[62px]">
            Доставка из ресторана
            <br />
            в керамической <br />
            посуде
          </h1>
          <button className="py-1 px-4 shadow-black text-[#FE9102] text-lg font-bold">
            Сториз о сервисе
          </button>
        </div>
        {/* <!-- img --> */}
        <div className="absolute hidden lg:block w-[50%] -bottom-5 left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:left-auto  lg:top-[-50px] lg:auto lg:right-0 lg:block ">
          <img src="./img/dish-header.png" alt="Meat" />
        </div>
      </div>
      <div className="absolute  bottom-2 left-[50%] -translate-x-1/2 md:left-[10%] md:bottom-10">
        <img src="./img/dots.svg" alt="" />
      </div>
    </section>
  )
}

export default Carousel
