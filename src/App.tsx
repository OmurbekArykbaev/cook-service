import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Layout from "./pages/Layout"

function App() {
  return (
    <div className="App bg-gray">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
