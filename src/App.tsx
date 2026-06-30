import { Route, Routes } from "react-router-dom"
import Login from "./pages/auth/login"
import CreateUser from "./components/forms/createUser"
import CreateProduct from "./components/forms/createProduct"
import CreateSupplier from "./components/forms/createSupplier"
import CreateUnits from "./components/forms/createUnits"
import CreatePurchaseOrder from "./components/forms/createPurchaseOrder"

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/create-user" element={<CreateUser />} />
      <Route path="/create-product" element={<CreateProduct />} />
      <Route path="/create-supplier" element={<CreateSupplier />} />
      <Route path="/create-unit" element={<CreateUnits />} />
      <Route path="/create-puchase-order" element={<CreatePurchaseOrder />} />
    </Routes>
  )
}

export default App
