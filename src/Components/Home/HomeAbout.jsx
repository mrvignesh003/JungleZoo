import React from 'react'
import'./HomeAbout.css'
import plant2 from '../../assets/Home/plant 2.png'
import leaf2 from '../../assets/Home/leaf 2.png'
import pl from '../../assets/Home/pl.png'
import pla from '../../assets/Home/pla.png'
import ele2 from '../../assets/Home/gif/ele2.gif'
import eleg from '../../assets/Home/gif/eleg.gif'
import entrance from '../../assets/about us/entrance.png'
import hill1 from '../../assets/Home/hill1.png'
import { Link } from 'react-router-dom'
const HomeAbout = () => {
  return (
    <div><section className="About">

<div className="heading">
            <h1>About Us</h1>
        </div>
    <img src={hill1} className="ab-hill1"/>
       
        <div className="container1">
            <div className="about">
                <div className="about-image">
                    <a href="#">
                        <img src={entrance} />
                    </a>
                </div>
                <div className="about-content">
                    <h2>Learn a Zoo History</h2>
                    <p>
                        The zoo is located in the heart of the city and its easy
                        accessibility for public<br/>  and other various tourist places has made
                        it a much favored tourist center.<br/> Jungle Z00 sports favorable
                        climate, the temperatures goes up to 35 degrees<br/> in peak summer and
                        below 20 degrees in winters.
                    </p>
                </div>
                <Link to='/about'>
                    <button className="aoubtn">Read More</button>
                </Link>
                <img className="plant4" src={pla} />
                <img className="plant3" src={pl} />
                <marquee
                    className="ele1"
                    behavior="scroll"
                    direction="right"
                    scrollamount={4}
                >
                    <img src={eleg} width={300} height={200} alt="Elephant" />
                </marquee>
                <img className="plant2" src={plant2} />
                <marquee
                    className="ele2"
                    behavior="scroll"
                    direction="left"
                    scrollamount={4}
                >
                    <img src={ele2} width={300} height={200} alt="Elephant" />
                </marquee>
                <img className="plant22" src={leaf2} />
            </div>
        </div>
    </section>

    </div>
  )
}

export default HomeAbout




