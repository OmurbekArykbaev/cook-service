import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import Order from "./pages/Order/Order"
import OrderList from "./pages/OrderList/OrderList"
import Shipping from "./pages/Shipping/Shipping"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
            <Route path="/orders" element={<OrderList />} />
            <Route path="/shipping" element={<Shipping />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
