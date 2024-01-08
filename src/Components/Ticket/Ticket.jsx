import React from 'react'
import './Ticket.css'
import entrance from '../../assets/about us/entrance.png'
import Header from '../Header/Header'
import Footer1 from '../Footer/Footer1'
import Parking from '../../assets/Ticket/Parking.png'
import Safari from '../../assets/Ticket/Safari.jpg'
import Battervehicles from '../../assets/amenities img/Battery operated vehicles.jpg'
import Luggageroom from '../../assets/amenities img/Luggage room.jpg'
import SC3 from '../../assets/SUMMERCAMP/SC3.jpg'
import { Link } from 'react-router-dom'
const Ticket = () => {
  return (
    <div className='internsec-ti'>
     <Header/>
        <div className="card-ti">
            <h1>Zoo Entrance Fee</h1>
  <img src={entrance}  alt="Avatar" />
  <div className="container-ti">
    <h4>
      <b>All Days</b>
    </h4>
    <h5> Adults	<span className='amount1'>₹ 100/-</span> </h5>
    <h5> Chid<br/>
( 5-12 Years of age)	<span className='amount2'>₹ 50/-</span> </h5>
  
    <h5> Chid<br/>
( below 5 years)<span className='amount3'>Free</span> </h5>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<Link to='/Tic'>
<button className='amou-bu-1'>Buy a Ticket</button>
</Link>
<br/>
<br/>
<br/>
  </div>
</div>
 {/*Ticket-2 */ }
        <div className="card-ti-2">
            <h1>Vehicle Parking</h1>
  <img src={Parking}  alt="Avatar" />
  <div className="container-ti-2">
    <h4>
      <b>All Days</b>
    </h4>
    <h5> Cycle	<span className='amount1-2'>₹ 15/-</span> </h5>
    <h5> Two Wheeler	<span className='amount1-v2'>₹ 40/-</span> </h5>
    <h5> Car / Jeep / Auto	<span className='amount1-v3'>₹ 70/-</span> </h5>
    <h5> Mini Bus / Tempo	<span className='amount1-v4'>₹ 125/-</span> </h5>
    <h5> Bus	<span className='amount1-v5'>₹ 175/-</span> </h5>
    
<br/>
<Link to='/Vehicletic'>
<button className='amou-bu-1-2'>Buy a Ticket</button>
</Link>
<br/>
<br/>
<br/>
  </div>
</div>
 {/*Ticket-3*/ }
        <div className="card-ti-3">
            <h1>Safari Travel</h1>
  <img src={Safari}  alt="Avatar" />
  <div className="container-ti-3">
    <h4>
      <b>All Days</b>
    </h4>
    <h5> Adults	<span className='amount1-3'>₹ 130/-</span> </h5>
    <h5> Chid<br/>
( 5-12 Years of age)	<span className='amount2-3'>₹ 70/-</span> </h5>
  
    <h5> Chid<br/>
( below 5 years)<span className='amount3-3'>Free</span> </h5>
<br/>
<br/>
<br/>
<br/>
<Link to='/safari'>
<button className='amou-bu-1-3'>Buy a Ticket</button>
</Link>
<br/>
<br/>
<br/>
  </div>
</div>
 {/*Ticket-4 */ }
        <div className="card-ti-4">
            <h1>Camera & Luggage</h1>
  <img src={Luggageroom}  alt="Avatar" />
  <div className="container-ti-4">
    <h4>
      <b>All Days</b>
    </h4>
    <h5> Video Camera	<span className='amount1-l4'>₹ 200/-</span> </h5>
    <h5> Still Camera	<span className='amount1-13'>₹ 100/-</span> </h5>
    <h5> Luggage	<span className='amount1-12'>₹ 15/-</span> </h5>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
<Link to='/equip'>
<button className='amou-bu-1-4'>Buy a Ticket</button>
</Link>
<br/>
<br/>
<br/>
  </div>
</div>
 {/*Ticket-5 */ }
        <div className="card-ti-5">
            <h1>Battery Operated Vehicles</h1>
  <img src={Battervehicles}  alt="Avatar" />
  <div className="container-ti-5">
    <h4>
      <b>All Days</b>
    </h4>
    <h5> Adults	<span className='amount1-5'>₹ 100/-</span> </h5>
    <h5> Chid<br/>
( 5-12 Years of age)	<span className='amount2-5'>₹ 50/-</span> </h5>
  
    <h5> Chid<br/>
( below 5 years)<span className='amount3-5'>Free</span> </h5>
<h5> Senior Citizen	<span className='amount1-b5'>₹ 100/-</span> </h5>
<h5> Online 7 seater	<span className='amount2-b5'>₹ 100/-</span> </h5>
<br/>
<Link to='/Explore'>
<button className='amou-bu-1-5'>Buy a Ticket</button>
</Link>
<br/>
<br/>
<br/>
  </div>
</div>
 {/*Ticket-6 */ }
        <div className="card-ti-6">
            <h1>Student Concessions</h1>
  <img src={SC3}  alt="Avatar" />
  <div className="container-ti-6">
    <h4>
      <b>All Days</b>
    </h4>
    <h5> L.K.G / U.K.G	<span className='amount1-6-1'>Free Entry</span> </h5>
    <h5> 1st - 7th Std	<span className='amount1-6-2'>₹ 30/-</span> </h5>
    <h5> 8th - 10th Std	<span className='amount1-6-3'>₹ 40/-</span> </h5>
    <h5> Teacher<br/>
    (Accompanying a group <br/>of 50 students)	<span className='amount2-6-4'>₹ 50/-</span> </h5>
  
    <br/>
    <br/>
    <br/>
    <br/>

<Link to='/student'>
<button className='amou-bu-1-6'>Buy a Ticket</button>
</Link>
<br/>
<br/>
<br/>
  </div>
</div>
<div className="indent-ti">
            <h6>UNIQUENESS</h6>
            <p>
              Sri Chamarajendra Zoological Gardens, popularly known as ‘Mysuru Zoo’,
              is one of the oldest zoos of the country established by his highness,
              the erstwhile ruler of Mysuru Sri Chamarajendra Wadiyar Bahadur. Mysuru
              Zoo is known for its meticulous planning, cleanliness, conservation
              breeding of endangered species, housing exotic animals from around the
              globe and recreation of natural habitat for captive animals.{" "}
            </p>
            <p>
              The zoo is located in the heart of the city and its easy accessibility
              for public transport and other various tourist places has made it a much
              favored tourist center. Mysuru Zoo sports favorable climate, the
              temperatures goes up to 35 degrees in peak summer and below 20 degrees
              in winters.
            </p>
            <div className="uul-ti">
              <ul>
                <li>Wide variety of animals; native and exotics</li>
                <li>Excellent visitor facilities</li>
                <li>Centre of Conservation Education</li>
                <li>
                  Excellent waste management and water harvesting system in place
                </li>
                <li>Self sustaining Zoo (earns its own revenue)</li>
                <li>Rescue and Rehabilitation of Wild Animals</li>
                <li>Conservation Breeding of Endangered Animals</li>
              </ul>
            </div>
            <h6>MY BELOVED FOUNDER</h6>
            <p>
              His Highness SriChamarajendra Wodeyar Bahadur, the 23rd Ruler of Yadu
              Dynasty started this zoo during the year 1892. This Zoo Garden was
              designed not for amusement of the Royalty but to educate the people of
              the State about Wildlife. It has the unique distinction of breeding rare
              species in captivity and emphasis was laid towards the comfort and
              wellbeing of the animals.
            </p>
            <p>
              The special feature of this zoo is the meticulous planning; they
              resorted in recreating the natural habitat for the different species.
              The ideas and techniques used were really revolutionary for that period.
            </p>
            <p>
              In commemoration of esteemed founder, a bust of His Highness Sri
              Chamarajendra Wodeyar was installed near the entrance of zoo during the
              Centenary Celebration.
            </p>
            <h6>MY INTRODUCTION</h6>
            <p>
              Hello my dear friends, first of all I thank you for visiting my website.
              Let me introduce myself. My name is Sri Chamarajendra Zoological Gardens
              and I am popularly known as Mysuru Zoo, I was established in the year
              1892 and during 1909, I was named after my dear founder, Sri
              Chamarajendra Wodeyar Bahadur. He engaged Mr. G.H. Krumbeigal, a German
              Landscaper and a horticulturist who had created the beautiful and
              attractive landscape for me.
            </p>
            <p>
              Initially, I was started with an area of 10.9 acres and in 1907 an
              additional 6.22 acres was included in me; and subsequently I was
              expanded to 45 acres. Mr. Huge, an Australian national was selected to
              head the expanded me as the superintendent. Later, another 50 acres of
              Kensington Gardens along with the Thandisadak was acquired and thus my
              total area has increased to 157.02 acre including 77.02 acres of Karanji
              Lake as on today.
            </p>
            <p>
              My special feature is my meticulous planning; I’m resorted in recreating
              the natural habitat for the different species of animals. A master plan
              was prepared on modern lines by removing the barred and fenced
              enclosures and providing moated enclosures for all the animals. At
              first, large-ape enclosures were built in the country in 1877 with big
              trees, bushes and lush grass for these animals to roam around and enjoy.
              A pair of Gorillas, Orangutans and some Chimpanzees acquired from other
              zoos and for the first time in Indian history, all these species of
              large apes could be seen together.
            </p>
      
       
         

          </div>

<Footer1 />
    </div>
  )
}

export default Ticket