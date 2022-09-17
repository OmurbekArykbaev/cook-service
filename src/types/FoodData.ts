interface ICalories {
  gram: number
  calories: number
}

export enum Category {
  liked = "liked",
  zak = "zak",
  sal = "sal",
  gor = "gor",
  soup = "soup",
  det = "det",
  des = "des",
  nap = "nap",
}

export type TCategory =
  | "liked"
  | "zak"
  | "sal"
  | "gor"
  | "soup"
  | "det"
  | "des"
  | "nap"

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
