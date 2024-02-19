import { Routes, Route } from "react-router-dom"
import Navbar from "./components/common/Navbar"
import Home from "./pages/Home"
import FormPage from "./pages/Form"

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<FormPage />}/>
          <Route path="/home" element={<Home />}/>
      </Routes>
    </>
  )
}

export default App
