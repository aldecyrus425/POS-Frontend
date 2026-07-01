import { Route, Routes } from "react-router-dom"
import Login from "./pages/auth/login"
import CreateUser from "./components/forms/createUser"
import CreateProduct from "./components/forms/createProduct"
import CreateSupplier from "./components/forms/createSupplier"
import CreateUnits from "./components/forms/createUnits"
import CreatePurchaseOrder from "./components/forms/createPurchaseOrder"
import AdminDashboard from "./pages/admin/dashboard"
import AdminMainLayout from "./components/layout/adminMainLayout"
import PurchaseOrder from "./pages/admin/purchaseOrder"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/create-supplier" element={<CreateSupplier />} />
        <Route path="/create-unit" element={<CreateUnits />} />
        <Route path="/create-puchase-order" element={<CreatePurchaseOrder />} />
      </Routes>

      <Routes>
        <Route path="/admin" element={<AdminMainLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="purchase-order" element={<PurchaseOrder />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
