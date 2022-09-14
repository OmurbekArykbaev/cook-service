import { configureStore } from "@reduxjs/toolkit"
import allFoodSlice from "../pages/Home/allFoodSlice"
import { foodsApi } from "../services/food"
import filteredByCategorySlice from "../components/Category/categorySlice"
// const persistConfig = {
// key: "root",
// storage,
// }

// const persistedReducer = persistReducer(persistConfig, {})

export const store = configureStore({
  reducer: {
    allFoodData: allFoodSlice,
    filteredByCategory: filteredByCategorySlice,

    [foodsApi.reducerPath]: foodsApi.reducer,
  },
})

// export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
