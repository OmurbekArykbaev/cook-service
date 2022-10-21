import axios from "axios"
import { IFood } from "../types"

const API_URL = "https://omur-api.herokuapp.com/api/cookservice"

axios.defaults.baseURL = API_URL

export async function fetchFoods(): Promise<IFood[]> {
  const { data } = await axios.get("/products")
  return data.products
}

export async function fetchCategories(): Promise<any[]> {
  const { data } = await axios.get("/category")
  return data.dataCategory
}
