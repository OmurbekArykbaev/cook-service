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
  category: string
  privatePerson: boolean
  corporatePerson: boolean
  image: string
}

export default IFood
