import { HashRouter, Routes, Route } from "react-router-dom"
import { Layout } from "@/components/layout/Layout"
import Home from "@/views/Home"
import About from "@/views/About"
import Services from "@/views/Services"
import Contact from "@/views/Contact"
import NotFound from "@/views/NotFound"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="not-found" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
