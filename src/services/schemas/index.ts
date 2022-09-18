import * as yup from "yup"

// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/
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

// confirmPassword: yup
// .string()
// .oneOf([yup.ref("password"), null], "Please must mutch")
// .required("Required"),
// age: yup.number().positive().integer().required(),
