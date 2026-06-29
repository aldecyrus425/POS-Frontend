import { Route, Routes } from "react-router-dom"
import Login from "./pages/auth/login"
import CreateUser from "./components/forms/createUser"
import CreateProduct from "./components/forms/createProduct"

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/create-user" element={<CreateUser />} />
      <Route path="/create-product" element={<CreateProduct />} />
    </Routes>
  )
}

export default App
