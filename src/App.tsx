import { BrowserRouter, Route, Routes } from "react-router-dom"
import {
  Payment,
  SelfData,
  AddAddress,
  Address,
  Cart,
  Home,
  Layout,
  LinkedCards,
  Order,
  OrderList,
  Shipping,
  LoginForm,
  OrderDetail,
} from "./app/pages"

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
            <Route path="/profile" element={<SelfData />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/order/detail/:id" element={<OrderDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
