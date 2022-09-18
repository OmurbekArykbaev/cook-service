import * as yup from "yup"
const nameRules = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ][a-zA-Zа-яА-ЯёЁ']*$/

export const addressSchema = yup.object().shape({
  street: yup.string().max(40).required("Требуется заполнить"),
  houseNumber: yup.string().max(5).required("Требуется заполнить."),
  entrance: yup.number().max(5),
  floor: yup.number().max(5),
  flatOffice: yup.string().max(5),
  callDoor: yup.string().max(5),
  comment: yup.string().matches(nameRules).max(60),
})
