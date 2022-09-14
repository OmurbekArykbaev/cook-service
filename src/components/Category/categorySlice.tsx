import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface InitState {
  filterByCategory: string
}

const initialState: InitState = {
  filterByCategory: "salad",
}

export const filteredByCategorySlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filtered: (state, action: PayloadAction<string>) => {
      state.filterByCategory = action.payload
    },
  },
})

export const { filtered } = filteredByCategorySlice.actions

export default filteredByCategorySlice.reducer
