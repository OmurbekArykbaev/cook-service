import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ILoginData {
  email: string
  password: string
}

interface InitState {
  loginData: ILoginData
  isAuthorization: boolean
}

const initialState: InitState = {
  loginData: { email: "", password: "" },
  isAuthorization: false,
}

export const authorizationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    getAuthorization: (state, action: PayloadAction<ILoginData>) => {
      state.loginData = action.payload
      state.isAuthorization = true
    },
  },
})

export const { getAuthorization } = authorizationSlice.actions

export default authorizationSlice.reducer
