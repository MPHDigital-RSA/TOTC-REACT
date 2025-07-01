import Navbar from "./components/Complex/Navbar"
import Home from "./pages/Home"
import Courses from "./pages/Courses"
import { Route, Routes } from "react-router-dom"
import Careers from "./pages/Careers"
import Blog from "./pages/Blog"
import About from "./pages/About"
import Footer from "./components/Complex/Footer"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {


  return (
    <>

      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </>
  )
}

export default App
