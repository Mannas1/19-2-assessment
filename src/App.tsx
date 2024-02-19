import { Routes, Route } from "react-router-dom"
import Navbar from "./components/common/Navbar"

function App() {

  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          <Route />
          <Route />
        </Route>
      </Routes>
    </>
  )
}

export default App
