import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import IDataCategories from "../types/Categories"

interface InitState {
  categoriesData: IDataCategories[]
}

const initialState: InitState = {
  categoriesData: [],
}

export const getCategorySlice = createSlice({
  name: "GetFetchCategory",
  initialState,
  reducers: {
    getCategories: (state, action: PayloadAction<IDataCategories[]>) => {
      state.categoriesData = action.payload
    },
  },
})

export const { getCategories } = getCategorySlice.actions

export default getCategorySlice.reducer
