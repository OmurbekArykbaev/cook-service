import IFood from "./types/FoodData"

export const data: IFood[] = [
  {
    id: "2",
    name: "Картофель с луком и белыми грибами",
    cal: { calories: 1040, gram: 320 },
    price: 430,
    description:
      "Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы.",
    category: "salad",
    privatePerson: false,
    corporatePerson: false,
    image: "./img/dish.png",
  },
  {
    id: "1",
    name: "Кукси",
    cal: { calories: 120, gram: 300 },
    price: 100,
    description: "lorem10",
    category: "salad",
    privatePerson: false,
    corporatePerson: false,
    image:
      "https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1078&q=80",
  },
]
