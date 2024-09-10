// import { Left } from "./component/Left"

// import Left from "./component/Left"
import Ten from "./component/ten"
import Navbar from "./component/Navbar"
import Layout from "./component/Layout/Layout"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/HomePage/Home"
import Hero from "./Pages/HeroPage/Hero"

 

function App() { 

  return (
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout>
          <Home/>
        </Layout>} />
      
      </Routes>
     </BrowserRouter>
  )
}

export default App