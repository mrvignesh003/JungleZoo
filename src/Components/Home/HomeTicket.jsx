import React from 'react'
import './HomeTicket.css'
import rabbit2 from '../../assets/Home/gif/rabbit2.gif'
import hyna from '../../assets/Home/gif/hyna.gif'
import ti from '../../assets/Home/gif/imgsec.jpg'
import monkey from '../../assets/Home/gif/monkey.gif'
import plant from '../../assets/Home/plant.png'
import plnt from '../../assets/Home/plnt.png'
import flybird from '../../assets/Home/gif/birds2.gif'
import boars from '../../assets/Home/gif/boars.gif'
import rhinoceros from '../../assets/Home/gif/rhinoceros.gif'
import hill3 from '../../assets/Home/hill3.png'
import hill4 from '../../assets/Home/hill4.png'
import hill2 from '../../assets/Home/hill2.png'
import secc from '../../assets/Home/secc.png'
import tit from '../../assets/Home/gif/image 6.jpg'

import { Link } from 'react-router-dom'
const HomeTicket = () => {
  return (
    <div>

        <div className="ticimg">
        <img src={ti} className='ticimg1'/>
        <img src={hill2} className='ticimg1'/>
        <img src={hill3} className='ticimg1'/>
        <img src={hill4} className='ticimg1'/>

            


                
                <marquee className="bird1" behavior="scroll" direction={"right" }scrollamount="9"><img src={flybird} width="300" height="200" alt="Swimming fish" /></marquee>
                <marquee className="rhinoceros" behavior="scroll" direction={"right" }scrollamount="9"><img src={rhinoceros} width="500" height="300" alt="Swimming fish" /></marquee>
                <div className='ti-txt'>
                <img src={tit} className='tit'/>
            <h1> Animal Adoption</h1>
            <h5>Adoption is a good gesture to wildlife. <br/>
            Adoption is accepting one as own. <br/>
            Adoption is an act of care to life. <br/>
            Adoption is sharing of self.
            </h5>
            <Link to='/Appsc'><button className='hoad-bu-1'>ADOPT NOW</button></Link>
            </div>

             <img className='giraffe' src={monkey} alt="Swimming fish" />
             <img className='ticimgs' src={plant} alt="Swimming fish" />
             <img className='secc' src={secc} alt="Swimming fish" />
             <marquee className="boars" behavior="scroll" direction={"left"}scrollamount="9"><img src={boars} width="300" height="300" alt="Swimming fish" /></marquee>
             <img className='plnt' src={plnt} alt="Swimming fish" />
             <marquee className="rabbit3" behavior="scroll" direction={"left" }scrollamount="10"><img src={rabbit2} width="300" height="150" alt="Swimming fish" /></marquee>
             <marquee className="hyna" behavior="scroll" direction={"left" }scrollamount="14"><img src={hyna} width="500" height="300" alt="Swimming fish" /></marquee>
          
           
          
            </div>
    </div>
  )
}

export default HomeTicket