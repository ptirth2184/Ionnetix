import { HashRouter, Routes, Route } from "react-router-dom"
import { Layout } from "@/components/layout/Layout"
import Home from "@/pages/Home"
import About from "@/pages/About"
import Services from "@/pages/Services"
import Blog from "@/pages/Blog"
import Contact from "@/pages/Contact"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
