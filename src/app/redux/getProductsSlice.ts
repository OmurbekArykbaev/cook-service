import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IFood } from "../types"

interface InitState {
  allFoods: IFood[]
  filterState: string
}
const initialState: InitState = {
  allFoods: [],
  filterState: "zak",
}

export const getProductsSlice = createSlice({
  name: "GetFetchProducts",
  initialState,

  reducers: {
    fetchAllFoods: (state, action: PayloadAction<IFood[]>) => {
      state.allFoods = action.payload
    },
    filterByCategory: (state, action: PayloadAction<string>) => {
      state.filterState = action.payload
    },
  },
})

export const { fetchAllFoods, filterByCategory } = getProductsSlice.actions

export default getProductsSlice.reducer
