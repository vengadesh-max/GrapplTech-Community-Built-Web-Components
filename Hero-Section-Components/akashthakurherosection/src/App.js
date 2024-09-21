import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Homepage';
import About from './pages/About';
import Services from './pages/Services';
import Work from './pages/Work';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
