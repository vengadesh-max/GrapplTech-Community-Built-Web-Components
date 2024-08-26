import React, { useState } from 'react';
import './App.css';
import Introduction from './pages/introduction';
import LandingPage from './pages/LandingPage';
import { motion } from 'framer-motion';

function App() {
  const [showPage, setShowPage] = useState(false);

  useState(() => {
    setTimeout(() => {
      setShowPage(true)
    }, 16000)
  })

  return (
    <div className="App">
      <motion.div
        animate={{ y: -620 }}
        transition={{ duration: 5, delay: 11 }}
        style={showPage ? { display: 'none' } : {}}
      >
        <Introduction />
      </motion.div>

      {
        showPage ?
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5 }}
          >
            <LandingPage />
          </motion.div>
          : <></>
      }
    </div>
  );
}

export default App;