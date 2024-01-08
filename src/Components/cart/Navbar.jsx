import React from 'react';
import './navbar.css';
import logo from '../../assets/Zoo.png'
import { Link } from 'react-router-dom';
import adopicon from '../../assets/adoption img/adop icon.png'
const Navbar = ({ size, setShow }) => {
    return (
        <>
            <header className='navigation4'>
                {/*logo*/}
                <Link to='/' ><img className="logo2" src={logo} /></Link>
                {/*Menu*/}
                <div>
                    <a href="#amzs1" onClick={() => setShow(true)} title='Home'>
                       Birds 
                    </a>
                    <a href='#amzs2' onClick={() => setShow(true)} title='Hunt'>Mammals</a>
                    <a href='#amzs3' onClick={() => setShow(true)} title='Tank'>Reptiles</a>
                </div>

                {/*-cart icon*/}
                <div className="boxna" onClick={() => setShow(false)}><img src={adopicon} />
                    <span className="cart-countna">{size}</span>
                </div>
            </header>
        </>
    )
}

export default Navbar