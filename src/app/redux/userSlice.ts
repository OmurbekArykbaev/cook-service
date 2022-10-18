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
  },
})

export const { getAuthorization, editUserData } = userSlice.actions

export default userSlice.reducer
