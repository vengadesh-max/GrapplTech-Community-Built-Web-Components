
import './App.css';
import { Hero } from './Components/Hero/Hero';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { Popular } from './Components/Popular/Popular';
import { Offers } from './Components/Offers/Offers';
import { NewCollections } from './Components/NewCollections/NewCollections';
import { NewsLetter } from './Components/NewsLetter/NewsLetter';
import { Footer } from './Components/Footer/Footer';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Hero></Hero>
      <Popular></Popular>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
