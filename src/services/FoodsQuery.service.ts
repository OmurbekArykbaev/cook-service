import axios from "axios"
import IFood from "../types/FoodData"

const API_URL = "http://localhost:3004"

axios.defaults.baseURL = API_URL

export async function fetchFoods(): Promise<IFood[]> {
  const { data } = await axios.get("/allfood")
  return data
}

// export const FoodsService = {
//   async getAll(): Promise<IFood[]> {
//     return axios.get("/allfood")
//   },
// }
