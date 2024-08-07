import { useState } from 'react'
import './App.css'
import './index.css'
import {Header} from "./header";
import {Hero} from "./hero";
import {Footer} from "./footer";
import logo from "../logo.jpeg";

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Footer></Footer>
    </>
  )
}

export default App
