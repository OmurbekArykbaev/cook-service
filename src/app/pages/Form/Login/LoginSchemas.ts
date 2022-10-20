import * as yup from "yup"

const nameRules = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']*$/

export const basicSchema = yup.object().shape({
  name: yup
    .string()
    .matches(nameRules, "Please enter valid name")
    .max(40)
    .required(),
  phone: yup
    .number()
    .min(5)
    .min(10, "Must be more than 10 characters")
    .required("This field is requried"),
})
