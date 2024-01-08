import React, { useState } from "react";
import dearrun from '../../assets/Home/gif/dearrun.gif'
import lion from '../../assets/Home/gif/lion.gif'
import plant from '../../assets/Home/plant.png'
import hill1 from '../../assets/Home/hill1.png'
import hill2 from '../../assets/Home/hill2.png'
import hill3 from '../../assets/Home/hill3.png'
import hill4 from '../../assets/Home/hill4.png'
import hill5 from '../../assets/Home/hill5.png'
import tree from '../../assets/Home/tree.png'
import leaf from '../../assets/Home/leaf.png'
import flybird from '../../assets/Home/gif/birds1.gif'
import './Parralax.css'
const Parralax = () => {

    return (
        <>
            <marquee className="bird" behavior="scroll" direction="left" scrollamount="9"><img src={flybird} width="300" height="200" alt="Swimming fish" /></marquee>

            <div className="parallax">
                <img src={hill1} className="hill1" id="Hill1" />
                <img src={hill2} className="hill1" id="hill2" />
                <img src={hill3} className="hill1" id="hill3" />
                <img src={hill4} className="para1" id="hill4" />
                <img src={hill5} className="para3" id="hill5" />
                <img src={tree} className="para" id="tree" />
                <h2 id="text">WELCOME TO JUNGLE ZOO</h2>
                <img src={leaf} className="para2" id="leaf" />
                <img src={plant} className="hill1" id="plant" />
            </div>

            <marquee className="dear" behavior="scroll" direction="left" scrollamount="12.8"><img src={dearrun} width="300" height="200" alt="Swimming fish" /></marquee>
            <marquee className="lion" behavior="scroll" direction="left" scrollamount="10.2"><img src={lion}width="300" height="200" alt="Swimming fish" /></marquee>



        </>
    )
}

export default Parralax