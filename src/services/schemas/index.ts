import * as yup from "yup"

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/

export const basicSchema = yup.object().shape({
  email: yup.string().email("please").required(),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
})

// confirmPassword: yup
// .string()
// .oneOf([yup.ref("password"), null], "Please must mutch")
// .required("Required"),
// age: yup.number().positive().integer().required(),
