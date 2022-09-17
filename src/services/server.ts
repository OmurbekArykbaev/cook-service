import axios from "axios"
import IFood from "../types/FoodData"

const API_URL = "http://localhost:3004"

axios.defaults.baseURL = API_URL

export async function fetchFoods(): Promise<IFood[]> {
  const { data } = await axios.get("/allfood")
  return data
}

export async function fetchCategories(): Promise<any[]> {
  const { data } = await axios.get("/datacategory")
  return data
}
