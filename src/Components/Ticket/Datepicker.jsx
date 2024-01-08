import React, { useState } from 'react'
import "./Datepicker.css";
function Datepicker() {
  const [date, setDate] = useState();
  console.log = ("Date", date);
  return (
    <div className='date'>

      <h1>Selected Date : {date} </h1>
      <input type="date" onChange={e => setDate(e.target.value)} />

    </div>
  )
}

export default Datepicker