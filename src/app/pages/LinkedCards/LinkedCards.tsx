import { Title, Wrapper } from "../../components"

const LinkedCards = () => {
  return (
    <Wrapper>
      <section>
        <div className="flex flex-col py-8">
          {/* <!-- title --> */}

          <Title toPath="/" titleName="Привязанные карты" />

          {/* Cards wrapper */}
          <div className="flex flex-wrap flex-col items-center md:items-start space-y-6 space-x-0 md:space-y-0 md:space-x-6 md:flex-nowrap mb-8 md:flex-row p-2 sm:p-8">
            {/* item 1 */}
            <div className="w-full h-[200px] rounded-xl shadow-toorder-panel-block sm:w-[360px]">
              <div className="flex p-6 items-center text-2xl">
                <img className="w-11" src="./img/master.svg" alt="" />
                <h1 className="ml-5 font-bold">**** 3456</h1>
              </div>
            </div>

            {/* item 2 */}
            <div className="w-full h-[200px] rounded-xl shadow-toorder-panel-block sm:w-[360px]">
              <div className="flex p-6 items-center text-2xl">
                <img className="w-11" src="./img/visa.svg" alt="" />
                <h1 className="ml-5 font-bold">**** 3456</h1>
              </div>
            </div>
          </div>

          {/* button */}

          <div className="px-6   sm:px-12">
            <button className="w-full btn font-bold py-4 px-6 md:py-2 md:w-[30%]">
              Добавить карту
            </button>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}

export default LinkedCards
