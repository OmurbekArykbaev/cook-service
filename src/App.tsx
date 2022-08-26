import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddAddress from "./pages/Address/AddAddress"
import Address from "./pages/Address/Address"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import LinkedCards from "./pages/LinkedCards/LinkedCards"
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
            <Route path="/cards" element={<LinkedCards />} />
            <Route path="/address" element={<Address />} />
            <Route path="/addresses" element={<AddAddress />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
