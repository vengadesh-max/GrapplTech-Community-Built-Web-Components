import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/navbar'
import './landingPage.css'
import swissHouse from "../assets/italy169.jpg"
import japan from "../assets/japanO169.jpg"
import paris from "../assets/parisC2.jpeg"
import santorini from "../assets/san169flip.jpg"
import MyImage from './MyImage'
import { motion, easeInOut } from "framer-motion"

const LandingPage = () => {
    const [changeBgCounter, setChangeBgCounter] = useState(0);
    const [changeCountryCounter, setChangeCountryCounter] = useState(0);
    const [opacityIsActive, setOpacityIsActive] = useState(true)
    const bgGallery = [santorini, japan, paris, swissHouse]
    const countryLocations = [
        {
            cname: "Greece",
            city: "Santorini"
        },
        {
            cname: "Japan",
            city: "Honshu"
        },
        {
            cname: "France",
            city: "Paris"
        },
        {
            cname: "Italy",
            city: "Stelvio"
        },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setOpacityIsActive(false);
            setTimeout(() => {
                setChangeBgCounter((prevCounter) => (prevCounter + 1) % bgGallery.length);
                setChangeCountryCounter((prevCounter) => (prevCounter + 1) % countryLocations.length);
                setOpacityIsActive(true);
            }, 2000);
        }, 15000);

        return () => clearInterval(interval);
    });

    return (
        <>
            <Navbar />

            <motion.div
                className='images-pos'
                animate={{ opacity: opacityIsActive ? 1 : 0 }}
                transition={{ duration: 1, ease: easeInOut }}
            >
                <MyImage image={bgGallery[changeBgCounter]} />
            </motion.div>
            <div className='hero-text'>
                <h1>Journey Beyond The <div className='earth'>🌏</div>rdinary</h1>
                <p>
                    Explore breathtaking destinations, create unforgettable memories, and experience the world like never before with GlobalTravels.
                </p>
                <button className='button'><a href="/">Book Now</a></button>
            </div>
            <div className='countries'>
                {countryLocations[changeCountryCounter].city + ', ' + countryLocations[changeCountryCounter].cname}
            </div>
        </>
    )
}

export default LandingPage