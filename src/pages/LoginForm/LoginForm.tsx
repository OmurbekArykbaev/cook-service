import React from "react"
import { useFormik } from "formik"
import { MdOutlineRemoveCircle } from "react-icons/md"
import Title from "../../components/Title/Title"
import Wrapper from "../../components/Wrapper/Wrapper"
import { basicSchema } from "../../services/schemas"
import { useAppDispatch } from "../../hooks/rtkHooks"
import { getAuthorization } from "./loginSlice"
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
      email: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit: (values, actions) => {
      console.log(values)
      dispatch(getAuthorization(values))
      actions.resetForm()
      navigate("/")
    },
  })

  console.log(errors.password)
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
                <label className="text-sm text-textGray" htmlFor="login">
                  Логин
                </label>
                <input
                  value={values.email}
                  className={
                    errors.email && touched.email
                      ? `input-items-address border border-red-500`
                      : `input-items-address border`
                  }
                  type="text"
                  name="email"
                  placeholder="Please enter your email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && (
                  <p className="text-red-800">{errors.email}</p>
                )}
              </div>

              {/* input 2 */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm text-textGray" htmlFor="password">
                  Пароль
                </label>
                <input
                  className={
                    errors.password && errors.password
                      ? `input-items-address border border-red-500`
                      : `input-items-address border`
                  }
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password && (
                  <p className="text-red-800">{errors.password}</p>
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
