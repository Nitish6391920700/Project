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
import Carousel from "./Pages/Events/Event"
import TechSrijanPage from "./Pages/Events/Info"
import AdminForm from "./Pages/Admin/admin.update"
import AdminDashboard from "./Pages/Admin/Admin-dasboard"
import Bacground from "./component/Bacground"
import ComingSoon from "./Pages/Events/ComingSoon"

 

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
        <Route path="/events" element={<Layout>
         <Carousel/>
        </Layout>} />
        <Route path="/info" element={<Layout>
         <TechSrijanPage/>
        </Layout>} />
        <Route path="/admin" element={<Layout>
         <AdminDashboard/>
        </Layout>} />
        <Route path="/coming-soon" element={<Layout>
         <ComingSoon/>
        </Layout>} />
      
      </Routes>
     </BrowserRouter>
  )
   
}

export default App