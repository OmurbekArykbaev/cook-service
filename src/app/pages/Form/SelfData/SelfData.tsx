import { MdOutlineRemoveCircle } from "react-icons/md"
import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"

import { IUserData } from "@base/app/types"
import { useAppDispatch, useAppSelector } from "../../../hooks"
import { Title, Wrapper, PushToast } from "../../../components"
import { userDataSchema } from "./schema"
import { editUserData } from "../../../redux/userSlice"

const SelfData = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { name, phone } = useAppSelector((state) => state.userPofile.userData)

  const onSubmit = (values: IUserData, actions: any): void => {
    dispatch(editUserData(values))
    actions.resetForm()
    navigate("/")
    PushToast("Изменения сохранены", 1000)
  }

  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik<IUserData>({
      initialValues: {
        name,
        phone,
      },
      validationSchema: userDataSchema,
      onSubmit,
    })

  return (
    <Wrapper>
      <section>
        <div className="flex flex-col py-8">
          <Title toPath="/" titleName="Мои данные" />

          <div className="flex flex-wrap flex-col items-center">
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col space-y-5 md:space-y-9"
            >
              {/* 2 input wrapper */}
              <div className="flex flex-col space-y-5 lg:items-center lg:space-y-0 lg:space-x-8 lg:flex-row">
                {/* input 1 */}
                <div className="flex lg:flex-1 flex-col space-y-2">
                  <label className="text-sm text-textGray" htmlFor="name">
                    Как вас зовут
                  </label>
                  <input
                    onChange={handleChange}
                    value={values.name}
                    className="input-items-address"
                    type="text"
                    name="name"
                  />
                  {errors.name && <p className="text-red-500">{errors.name}</p>}
                </div>
                {/* input 2 */}
                <div className="flex flex-col space-y-2">
                  <label className="text-sm text-textGray" htmlFor="phone">
                    Телефон
                  </label>
                  <input
                    onChange={handleChange}
                    value={values.phone}
                    className="input-items-address"
                    type="number"
                    name="phone"
                  />
                  {errors.phone && (
                    <p className="text-red-500">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* buttons */}
              <div className='flex justify-between space-x-8  sm:px-12"'>
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full btn font-bold py-4 px-6 md:py-2 md:w-[30%]"
                >
                  {isSubmitting ? "..." : "Сохранить"}
                </button>
                <button className="text-black text-lg">
                  <p className="hidden md:block">Удалить аккаунт</p>{" "}
                  <MdOutlineRemoveCircle className="md:hidden" size={35} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}

export default SelfData
