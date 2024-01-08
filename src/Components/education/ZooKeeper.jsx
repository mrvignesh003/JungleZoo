import React from 'react'
import './ZooKeeper.css'
import entrance from '../../assets/about us/entrance.png'
import ZS1 from '../../assets/Zoo Keeper Training Programme/ZS1.jpg'
import ZS2 from '../../assets/Zoo Keeper Training Programme/ZS2.jpg'
import ZS3 from '../../assets/Zoo Keeper Training Programme/ZS3.jpg'
import Header from '../Header/Header'
import Footer1 from '../Footer/Footer1'
const ZooKeeper = () => {
  return (
    <div className='internsec'>
      <Header/>
     <section>
        <img className="entrance" src={entrance} />
        <div className="indent4">
        <h6> Keeper Training Programme</h6>
      <p> Zoo organizes Capacity Building Training Program for Animal keepers of other Zoos. This program aims at improving animal Husbandry skills, Zoo Enrichment, Communication skills, and personality Development of Zoo keepers.</p>
      </div>
        <div className="edimg">
          <img src={ZS1} />
          <img src={ZS2} />
          <img src={ZS3} />

        </div>
      </section>
      <Footer1 />
    </div>
  )
}

export default ZooKeeper