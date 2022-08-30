import { configureStore } from "@reduxjs/toolkit"
import allFoodSlice from "../pages/Home/allFoodSlice"
// const persistConfig = {
// key: "root",
// storage,
// }

// const persistedReducer = persistReducer(persistConfig, {})

export const store = configureStore({
  reducer: {
    allFoodData: allFoodSlice,
  },
})

// export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch