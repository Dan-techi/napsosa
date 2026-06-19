import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import School from './pages/School'
import AboutPage from './pages/AboutPage'
import EventsPage from './pages/EventsPage'
import GovernancePage from './pages/GovernancePage'
import './index.css'

export default function App() {
  return (
    <BrowserRouter basename="/napsosa/">
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <TopBar />
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/school" element={<School />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/governance" element={<GovernancePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
