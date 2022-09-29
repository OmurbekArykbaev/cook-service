import { Category } from "./categories"

interface ICalories {
  gram: number
  calories: number
}

interface IFood {
  id: string
  name: string
  cal: ICalories
  price: number
  description: string
  category: Category
  privatePerson: boolean
  corporatePerson: boolean
  image: string
}

export default IFood
