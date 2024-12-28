import cod from "./img/cod.jpg"
import gta from "./img/gtav.webp"
import car from "./img/car.webp"
import { useEffect, useState } from "react"
import './media.css'
function Hero(){
      return(
            <>
                  <Note></Note>
            </>
      )
}

function Note(){
      return(
            <>
            <div class="NoteMain">
                  <h1 className="headLine">AM GameHub</h1>
                  <div className="slogen">
                        Unleash Your Inner Gamer<br/>
                        Dive into epic adventures and immersive worlds.<br/>

                        Join the ultimate gaming community today.<br/>

                        Experience the thrill of victory.<br/>

                        Play Now and Conquer the Virtual Realm!<br/>
                  </div>
                  <div className="svbtn">
                        <button>SHOP</button>
                        <button>VIEW</button>
                  </div>
            </div>
            </>
      )
}
export {Hero}