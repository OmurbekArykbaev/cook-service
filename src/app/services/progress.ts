import { useEffect, useState } from "react"

const ProgressCount = (number: number, sec: number, max: number) => {
  const [count, setCount] = useState(number)
  const seconds: number = sec

  let increment = setInterval(() => setCount((i) => i + 1), seconds)
  setTimeout(() => clearInterval(increment), seconds * 3)

  // let timer = setTimeout(() => {
  // if (count === 3) clearInterval(increment)
  // }, seconds * 3)

  if (count === max) {
    setCount(max)
    clearInterval(increment)
    return count
  }
  console.log("счетчик", count)

  return count
}

export default ProgressCount
