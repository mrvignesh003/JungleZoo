import React from 'react'
import map from '../../assets/Zoo Map/map1.jpg'
import Header from '../Header/Header'
import './Map.css'
import Footer1 from '../Footer/Footer1'
const Map = () => {
  return (
    <div className='maba'>
         <Header />
            <img className="maps" src={map} />
            <Footer1 />
    </div>
  )
}

export default Map