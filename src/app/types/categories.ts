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

export default interface IDataCategories {
  id: number
  title: string
  category: Category
}
