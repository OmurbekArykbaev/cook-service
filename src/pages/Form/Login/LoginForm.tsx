import React from "react"
import { useFormik } from "formik"
import { MdOutlineRemoveCircle } from "react-icons/md"
import Title from "../../../components/Title/Title"
import Wrapper from "../../../components/Wrapper/Wrapper"
import { basicSchema } from "../../../services/schemas"
import { useAppDispatch } from "../../../hooks/rtkHooks"
import { getAuthorization } from "./userSlice"
import { useNavigate } from "react-router-dom"

const LoginForm = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      phone: "996",
    },
    validationSchema: basicSchema,
    onSubmit: (values, actions) => {
      console.log(values)
      dispatch(getAuthorization(values))
      actions.resetForm()
      navigate("/address")
    },
  })

  return (
    <Wrapper>
      <section>
        <div className="flex flex-col py-8">
          {/* <!-- title --> */}
          <Title toPath="/" titleName="Войти" />

          {/* Form wrapper */}
          <div className="flex flex-wrap flex-col items-center">
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col space-y-5 md:space-y-9"
            >
              {/* input 1 */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm text-textGray" htmlFor="name">
                  Имя
                </label>
                <input
                  value={values.name}
                  className={
                    errors.name && touched.name
                      ? `input-items-address border border-red-500`
                      : `input-items-address border`
                  }
                  type="text"
                  name="name"
                  placeholder="Please enter your name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name && (
                  <p className="text-red-800">{errors.name}</p>
                )}
              </div>

              {/* input 2 */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm text-textGray" htmlFor="phone">
                  Номер телефона
                </label>
                <input
                  className={
                    errors.phone && errors.phone
                      ? `input-items-address border border-red-500`
                      : `input-items-address border`
                  }
                  type="number"
                  name="phone"
                  onChange={handleChange}
                  value={values.phone}
                  onBlur={handleBlur}
                />
                {errors.phone && touched.phone && (
                  <p className="text-red-800">{errors.phone}</p>
                )}
              </div>

              {/* buttons */}
              <div className='flex justify-between space-x-8  sm:px-12"'>
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full btn font-bold py-4 px-6 md:py-2 md:w-[30%]"
                >
                  Войти
                </button>
                <button className="text-black text-lg">
                  <p className="hidden md:block">Удалить адрес</p>{" "}
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

export default LoginForm
