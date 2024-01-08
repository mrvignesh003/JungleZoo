import React from 'react';
import './Card.css'
import leaf2 from '../../assets/Home/leaf 2.png'
import bgadb from '../../assets/adoption img/bgadb.png'
const Cards = ({ item, handleClick }) => {
  const { title,title1, price, img } = item;
  return (
    <div className="flex-box">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={leaf2}
              alt="Leaf"
              style={{ width: 300, height: 300, filter: "saturate(3)" }}
            />
            <img
              className="secondimg"
              src={img}
              alt="Animals"
              style={{ width: 300, height: 300 }}
            />
          </div>
          <div className="flip-card-back">
            <img className="flibg" src={bgadb} />
            <h1 className="flih1">{title}</h1>
            <h1 className="flih1">{title1}</h1>
            <p>Rs.{price}</p>
            <button onClick={() => handleClick(item)} className="flibtn">Adoption Now</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Cards