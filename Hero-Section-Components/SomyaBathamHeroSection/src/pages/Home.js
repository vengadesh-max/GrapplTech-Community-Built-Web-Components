import React from 'react'
import Layout from '../components/Layout'
import {Link} from 'react-router-dom'
import Banner from '../Images/banner.jpeg'
import '../style/Homestyle.css'
const Home = () => {
  return (
    <Layout>
      <div className='home' style={{backgroundImage:`url(${Banner})`}}>
      <div className='headercontainer'>
        <h1>food website</h1>
        <p>Best Food In India</p>
       <Link to={'/menu'}>
       <button>
        ORDER NOW
     </button>
      </Link>
      </div>

      </div>
    </Layout>
  )
}

export default Home;