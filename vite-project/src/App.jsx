// import { Left } from "./component/Left"

// import Left from "./component/Left"
import Ten from "./component/ten"
import Navbar from "./component/Navbar"
import Layout from "./component/Layout/Layout"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/HomePage/Home"
import Hero from "./Pages/HeroPage/Hero"
import Signup from "./Pages/User/Signup"
import Login from "./Pages/User/Login"
import InstructorsSection from "./Pages/Team/Team"
import CardGalleryComponent from "./Pages/Gallary/Gallery"
import LandingPage from "./component/ContactUs"
import AboutPage from "./component/About"

 

function App() { 

  return (
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout>
          <Home/>
        </Layout>} />
        <Route path="/signup" element={<Layout>
          <Signup/>
        </Layout>} />
        <Route path="/signin" element={<Layout>
          <Login/>
        </Layout>} />
        <Route path="/team" element={<Layout>
          <InstructorsSection/>
        </Layout>} />
        <Route path="/gallery" element={<Layout>
         <CardGalleryComponent/>
        </Layout>} />
        <Route path="/contact" element={<Layout>
         <LandingPage/>
        </Layout>} />
        <Route path="/about" element={<Layout>
         <AboutPage/>
        </Layout>} />
        
        
      
      </Routes>
     </BrowserRouter>
  )
}

export default App