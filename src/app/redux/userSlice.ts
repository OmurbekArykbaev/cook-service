import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { IUserData } from "../types"

interface InitState {
  userData: IUserData
  isAuthorization: boolean
}

const initialState: InitState = {
  userData: { name: "", phone: "" },
  isAuthorization: false,
}

export const userSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    getAuthorization: (state, action: PayloadAction<IUserData>) => {
      state.userData = action.payload
      state.isAuthorization = true
    },

    editUserData: (state, action: PayloadAction<IUserData>) => {
      state.userData = action.payload
    },
    logOut: (state) => {
      state.isAuthorization = false
      state.userData = { name: "", phone: "" }
    },
  },
})

export const { getAuthorization, editUserData, logOut } = userSlice.actions

export default userSlice.reducer
