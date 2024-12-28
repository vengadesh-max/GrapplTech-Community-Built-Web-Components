import React from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Menu />
      </main>
      <Footer />
    </div>
  );
}

export default App;
