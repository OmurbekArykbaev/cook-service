import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import IFood from "../types/FoodData"

export const foodsApi = createApi({
  reducerPath: "allFoodsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004" }),
  endpoints: (builder) => ({
    getAllFoods: builder.query<IFood[], string>({
      query: () => `/allFood`,
    }),
  }),
})

export const { useGetAllFoodsQuery } = foodsApi
