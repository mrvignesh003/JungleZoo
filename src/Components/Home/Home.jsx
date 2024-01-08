import React from 'react'
import './Home.css'
import Header from '../Header/Header'

import Footer from '../Footer/Footer1'
import Parralax from './Parralax'
import HomeAbout from './HomeAbout'
import HomeTicket from './HomeTicket'
import HomeAdoption from './HomeAdoption'
const Home = () => {
    return (
        <div>
            <Header />
            <>
                <Parralax />
            </>
            <HomeAbout />
           <HomeAdoption/> 
           <HomeTicket />
           <Footer/>

        </div>
    )
}

export default Home