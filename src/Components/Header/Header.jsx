import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Zoo.png'
import butterflyteal from '../../assets/Home/gif/butterfly-teal.gif'

import './Header.css'

const Header = () => {
    return (
        <div>
            <header>
                <img className="logo" src={logo} />
                <nav className="navigation">
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/Visit'>Visit</Link>
                    <Link to='/Map'>Map</Link>
                </nav>
                <nav className="navigation3">
                    <div className="dropdown">
                        <a href="#">Education</a>
                        <div className="dropdown-content">
                            <Link to='/Internship'>Interships</Link>
                            <Link to='/ZooKeeper'>Zoo Keeper Training</Link>
                            <Link to='/Inout'>Inreach &amp; outreach</Link>
                            <Link to='/Summercamp'>Summer Camp</Link>
                            <Link to='/Youthclub'>Youth Club</Link>
                        </div>
                    </div>
                </nav>
                <nav className="navigation2">
                    <a href="#Foot">Contact</a>
                    <Link to='/Ticket'>Ticket</Link>
                    <Link to='/Donation'>Donation</Link>
                    <Link to='/Appsc'>Adoption</Link>
                </nav>
                <div className='hdbnred'>
                <Link to='/login'><button className='hdbutton' ><span className='signin'><img src={butterflyteal}/></span></button></Link>
                    </div>
            </header>
        </div>
    )
}

export default Header