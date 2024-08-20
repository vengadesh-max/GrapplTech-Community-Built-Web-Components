import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HeroSection from './Component/hero-section';
import HospitalServices from './Component/hospitalService';
import Navbar from './Component/Navbar';

function App() {
  return (
    
    <Router>
        
      <Routes>
      
      
        <Route path="/" element={<Navigate to="/hero-section" />} />
        <Route path="/hero-section" element={<HeroSection />} />
        <Route path="/service" element={<HospitalServices />} />
        
        
      </Routes>
    </Router>
  );
}

export default App;
