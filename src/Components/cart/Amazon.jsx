import React from 'react';
import list from './data';
import './amazon.css';
import Cards from './Cards'
import Footer from '../Footer/Footer'
const Amazon = ({ handleClick }) => {
  return (
    <div className='linear'>
      <h1 className='amz1' id='amzs1'>Birds</h1>
      <h1 className='amz2'id='amzs2'>Mammals</h1>
      <h1 className='amz3'id='amzs3'>Reptiles</h1>
      <section className='flex-box'>
        {
          list.map((item) => (
            <Cards item={item} key={item.id} handleClick={handleClick} />
          ))
        }
      </section>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer />
    </div>

  )
}

export default Amazon