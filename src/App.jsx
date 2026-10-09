import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToHash from './components/ScrollToHash'
import WhatsAppButton from './components/WhatsAppButton'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Fees from './components/Fees'
import Coaches from './components/Coaches'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import GalleryPage from './pages/GalleryPage'
import RegisterPage from './pages/RegisterPage'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <Fees />
      <Coaches />
      <Gallery />
      <Contact />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  )
}

export default App