import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { act } from "react-dom/test-utils"
import IFood from "../../types/FoodData"

interface InitState {
  allFoods: IFood[]
  filterState: string
}

// enum Category {
//   liked = "liked",
//   zak = "zak",
//   sal = "sal",
//   gor = "gor",
//   soup = "soup",
//   det = "det",
//   des = "des",
//   nap = "nap",
// }

const initialState: InitState = {
  allFoods: [],
  filterState: "zak",
}

export const allFoodSlice = createSlice({
  name: "AllFoodInHomePage",
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

export const { fetchAllFoods, filterByCategory } = allFoodSlice.actions

export default allFoodSlice.reducer
