import React from 'react'
import './HomeAdoption.css'
import ticimg from '../../assets/Home/gif/ticimg.jpeg'
import rabbit2 from '../../assets/Home/gif/rabbit2.gif'
import ti from '../../assets/Home/gif/image.png'
import ticimg11 from '../../assets/Home/gif/ticimg1.png'
import flybird from '../../assets/Home/gif/birds2.gif'
import giraffe from '../../assets/Home/gif/giraffe.gif'
import gorila from '../../assets/Home/gif/gorila.gif'
import WaterBuffalo from '../../assets/Home/gif/Water Buffalo.gif'
import entrance from '../../assets/about us/entrance.png'
import Safari from '../../assets/Ticket/Safari.jpg'
import { Link } from 'react-router-dom'
const HomeAdoption = () => {
  return (
    <div>

        <div className="ticimg">
                <img src={ticimg} className='ticimg1'/>
                <marquee className="rabbit2" behavior="scroll" direction={"left" }scrollamount="7"><img src={rabbit2} width="300" height="150" alt="Swimming fish" /></marquee>
                <img src={ticimg11} className='ticimg1'/>

                
                <marquee className="bird1" behavior="scroll" direction={"right" }scrollamount="9"><img src={flybird} width="300" height="200" alt="Swimming fish" /></marquee>
                <marquee className="gorila" behavior="scroll" direction={"right" }scrollamount="9"><img src={gorila} width="600" height="400" alt="Swimming fish" /></marquee>
                <img src={ticimg11} className='ticimg1'/>
         
             <img className='giraffe' src={giraffe} alt="Swimming fish" />

             <img src={ti} className='ticimg1'/>
             <marquee className="WaterBuffalo" behavior="scroll" direction={"left" }scrollamount="10"><img src={WaterBuffalo} width="600" height="400" alt="Swimming fish" /></marquee>
             <marquee className="WaterBuffalo" behavior="scroll" direction={"left" }scrollamount="8"><img src={WaterBuffalo} width="600" height="400" alt="Swimming fish" /></marquee>
             <marquee className="WaterBuffalo" behavior="scroll" direction={"left" }scrollamount="9"><img src={WaterBuffalo} width="600" height="400" alt="Swimming fish" /></marquee>
             <marquee className="WaterBuffalo" behavior="scroll" direction={"left" }scrollamount="12"><img src={WaterBuffalo} width="600" height="400" alt="Swimming fish" /></marquee>

             <div className="card-ti-hoti">
            <h1>Zoo Entrance Fee</h1>
  <img src={entrance}    alt="Avatar" />
  <div className="container-ti-hoti">
    <h4>
      <b>All Days</b>
    </h4>
    <h5> Adults	<span className='amount1-hoti'>₹ 100/-</span> </h5>
    <h5> Chid<br/>
( 5-12 Years of age)	<span className='amount2-hoti'>₹ 50/-</span> </h5>
  
    <h5> Chid<br/>
( below 5 years)<span className='amount3-hoti'>Free</span> </h5>
<br/>


<Link to='/Ticket'>
<button className='amou-bu-1-hoti'>Buy a Ticket</button>
</Link>
<br/>
<br/>
<br/>
  </div>
</div> <div className="card-ti-3-hoti">
            <h1>Safari Travel</h1>
  <img src={Safari}  alt="Avatar" />
  <div className="container-ti-3-hoti">
    <h4>
      <b>All Days</b>
    </h4>
    <h5> Adults	<span className='amount1-3-hoti'>₹ 130/-</span> </h5>
    <h5> Chid<br/>
( 5-12 Years of age)	<span className='amount2-3-hoti'>₹ 70/-</span> </h5>
  
    <h5> Chid<br/>
( below 5 years)<span className='amount3-3-hoti'>Free</span> </h5>
<br/>

<Link to='/Ticket'>
<button className='amou-bu-1-3-hoti'>Buy a Ticket</button>
</Link>
<br/>
<br/>
<br/>
  </div>
</div>

            </div>
    </div>
  )
}

export default HomeAdoption