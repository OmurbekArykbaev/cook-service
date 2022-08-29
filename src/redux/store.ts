import { configureStore } from "@reduxjs/toolkit"

// const persistConfig = {
// key: "root",
// storage,
// }

// const persistedReducer = persistReducer(persistConfig, {})

export const store = configureStore({
  reducer: {},
})

// export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
