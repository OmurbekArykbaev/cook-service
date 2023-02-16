import axios from "axios"
import { IFood } from "../types"

const API_URL = "https://mocki.io/v1"

axios.defaults.baseURL = API_URL

export async function fetchFoods(): Promise<IFood[]> {
  const { data } = await axios.get("/9d5a600a-02fb-4f34-8116-e41344c844a9")
  return data.products
}

export async function fetchCategories(): Promise<any[]> {
  const { data } = await axios.get("/1a621da8-2107-4b9b-9636-4ae28c5e29b3")
  return data.dataCategory
}
