import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
  isOpen: false,
}

export const pushUpOrder = createSlice({
  name: "PushUpOrderState",
  initialState,

  reducers: {
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload
    },
  },
})

export const { setIsOpen } = pushUpOrder.actions

export default pushUpOrder.reducer
