import * as yup from "yup"
// const kgNumber =
//   /^((8|\+996)[\- ]?)?\(?\d{3,5}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/

export const userDataSchema = yup.object().shape({
  name: yup.string().max(40).required("Требуется заполнить"),
  phone: yup.string().max(10).required("Требуется заполнить."),
})
