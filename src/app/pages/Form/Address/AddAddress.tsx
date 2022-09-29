import { useFormik } from "formik"
import { MdOutlineRemoveCircle } from "react-icons/md"
import { Title, Wrapper } from "../../../components"
import CustomInput from "./CustomInput"
import { addressSchema } from "./schema"
import { IAddressData } from "../../../types/userProfile"
import { useAppDispatch } from "../../../hooks"
import { useNavigate } from "react-router-dom"
import { addAddress } from "../../../redux/userSlice"

const AddAddress = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const onSubmit = (values: IAddressData, actions: any): void => {
    dispatch(addAddress(values))
    actions.resetForm()
    navigate("/cart")
  }

  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik<IAddressData>({
    initialValues: {
      id: Date.now(),
      street: "",
      houseNumber: "",
      entrance: "",
      floor: "",
      flatOffice: "",
      callDoor: "",
      comment: "",
    },
    validationSchema: addressSchema,
    onSubmit,
  })

  return (
    <Wrapper>
      <section>
        <div className="flex flex-col py-8">
          <Title toPath="/" titleName="Мои Адреса" />
          <div className="flex flex-wrap flex-col items-center">
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col space-y-5 md:space-y-9"
            >
              {/* input 1 */}
              <CustomInput
                error={errors.street}
                labelTitle="Улица"
                labelFor="street"
                inputName="street"
                inputType="text"
                value={values.street}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
              {/* input 2 */}
              <CustomInput
                error={errors.houseNumber}
                labelTitle="Номер дома"
                labelFor="houseNumber"
                inputName="houseNumber"
                inputType="string"
                value={values.houseNumber}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />

              {/* inputs wrapper 4 items  */}
              <div className="grid grid-cols-2 gap-6 md:space-y-2 md:flex md:items-center  md:space-x-8 md:flex-row">
                {/* input 1 */}
                <CustomInput
                  error={errors.entrance}
                  labelTitle="Подъезд"
                  labelFor="entrance"
                  inputName="entrance"
                  inputType="number"
                  value={values.entrance}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
                {/* input 2 */}
                <CustomInput
                  error={errors.floor}
                  labelTitle="Этаж"
                  labelFor="floor"
                  inputName="floor"
                  inputType="number"
                  value={values.floor}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
                {/* input 3 */}
                <CustomInput
                  error={errors.flatOffice}
                  labelTitle="Квартира/Офис"
                  labelFor="flatOffice"
                  inputName="flatOffice"
                  inputType="text"
                  value={values.flatOffice}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
                {/* input 4 */}
                <CustomInput
                  error={errors.callDoor}
                  labelTitle="Домофон/Охрана"
                  labelFor="callDoor"
                  inputName="callDoor"
                  inputType="text"
                  value={values.callDoor}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
              </div>

              {/* textarea comment */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm text-textGray" htmlFor="comment">
                  Комментарий (если есть)
                </label>
                <textarea
                  className="input-items-address resize-none"
                  name="comment"
                  value={values.comment}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  rows={4}
                />
              </div>
              {errors.comment && (
                <p className="text-red-500">{errors.comment}</p>
              )}

              {/* buttons */}
              <div className='flex justify-between space-x-8  sm:px-12"'>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn font-bold py-4 px-6 md:py-2 md:w-[30%]"
                >
                  Сохранить
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

export default AddAddress
