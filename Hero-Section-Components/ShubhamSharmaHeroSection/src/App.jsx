
import Navbar from './components/Navbar'
import './App.css'
import roll from './assets/roll.mp4'

function App() {
 

  return (
    <>
    <div className="root">
      <Navbar/>
      
      <div className="headings">
    <video autoPlay loop muted>
        <source src={roll}/>
      </video>
      <div className="content">

      <h1 className='heading'>Designing Digital Dreams, One Pixel at a Time</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium eligendi natus fugiat beatae vitae laboriosam? Aut facilis, commodi nisi consequuntur id excepturi.</p>
      <button className='contentbtn'>Read More</button>
      </div>
      </div>
    </div>
      
    </>
  )
}

export default App
