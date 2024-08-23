import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HeroSection from './Component/hero-section';
import HospitalServices from './Pages/hospitalService';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';

function App() {
  return (
    
    <Router>
        
      <Routes>
      
      
        <Route path="/" element={<Navigate to="/hero-section" />} />
        <Route path="/hero-section" element={<HeroSection />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/service" element={<HospitalServices />} />
        <Route path="/contact" element={< ContactUs/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
