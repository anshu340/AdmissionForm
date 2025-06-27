import Admission from "./assets/Admission"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/form" element={<Admission/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
