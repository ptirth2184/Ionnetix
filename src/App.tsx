import { HashRouter, Routes, Route } from "react-router-dom"
import { Layout } from "@/components/layout/Layout"
import Home from "@/pages/Home"
import About from "@/pages/About"
import Services from "@/pages/Services"
import Contact from "@/pages/Contact"
import NotFound from "@/pages/NotFound"

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
