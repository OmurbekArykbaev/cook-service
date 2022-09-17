import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ILoginData {
  email: string
  password: string
}

interface InitState {
  loginData: ILoginData
}

const initialState: InitState = {
  loginData: { email: "", password: "" },
}

export const authorizationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    getAuthorization: (state, action: PayloadAction<ILoginData>) => {
      state.loginData = action.payload
    },
  },
})

export const { getAuthorization } = authorizationSlice.actions

export default authorizationSlice.reducer
