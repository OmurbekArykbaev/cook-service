import * as yup from "yup"
// const kgNumber =
//   /^((8|\+996)[\- ]?)?\(?\d{3,5}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/

const nameRules = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']*$/

export const userDataSchema = yup.object().shape({
  name: yup
    .string()
    .max(40)
    .matches(nameRules, "Ошибка валидации")
    .required("Требуется заполнить"),
  phone: yup
    .string()
    .min(12, "Номер не должен быть меньше 12 цифр")
    .max(12, "Номер не должен быть больше 12 цифр")
    .required("Требуется заполнить."),
})
