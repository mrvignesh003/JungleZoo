import React from 'react'
import { useState } from 'react'
import './Safari.css'
import vi12 from '../../assets/autopaly video/vi12.mp4'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Safari() {
    {/*backend connect restapi order form */ }
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [adultticket, setAdultticket] = useState()
    const [childticket, setChildticket] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/Safri',
            { name, phone, adultticket,childticket })
            .then(result => {
                console.log(result)
            })
            .catch(err => console.log(err))
            navigate('/Ticket')
    }
    return (
        <div className='chekbody-2-saf'>
             {/** video*/}
             <div className="sinvideo">
                <video autoPlay muted loop id='sinmyvideo'>
                    <source src={vi12} type='video/mp4'></source>
                </video>
            </div>
            <div className="chekform-box-2-saf">
                <div className="chekform-value-2-saf">
                    <form className='checkfom-2-saf' onSubmit={handleSubmit}>
                        {/*title*/}
                        <h1 className='chekh11-2-saf'>Safari Travel Ticket</h1>
                        {/*name*/}
                        <div className="chekinputbox1-2-saf">
                            <input type="text" onChange={(e) => setName(e.target.value)} required />
                            <label>Name</label>
                        </div>
                        {/*email*/}
                        <div className="chekinputbox2-2-saf">
                            <input type="phone" onChange={(e) => setPhone(e.target.value)} required />
                            <label>Phone</label>
                        </div>
                        <div className="tic-form-1-saf">

                            <label> Adults  :</label>
                            <select onChange={(e) => setAdultticket(e.target.value)}>
                                <option >Per Adults </option>
                                <option onChange={(e) => setAdultticket(e.target.value)}>130</option>
                                <option onChange={(e) => setAdultticket(e.target.value)}>160</option>
                                <option onChange={(e) => setAdultticket(e.target.value)}>190</option>
                                <option onChange={(e) => setAdultticket(e.target.value)}>220</option>
                                <option onChange={(e) => setAdultticket(e.target.value)}>250</option>
                               
                            </select>
                        </div>
                        <div className="tic-form-2-saf">

                            <label >Child  :</label>
                            <select  onChange={(e) => setChildticket(e.target.value)}>
                                <option> Per Child</option>
                                <option onChange={(e) => setChildticket(e.target.value)}>70</option>
                                <option onChange={(e) => setChildticket(e.target.value)}>140</option>
                                <option onChange={(e) => setChildticket(e.target.value)}>210</option>
                                <option onChange={(e) => setChildticket(e.target.value)}>280</option>
                                <option onChange={(e) => setChildticket(e.target.value)}>350</option>
                            </select>
                        </div>
                        {/*dummy checkbox*/}
                        <div className="giftchek-2-saf">
                            <label className='gifcheklab-2-saf' for="text">Send Gift ?</label>
                            <label className='giftcheklab-2-saf'><input type="checkbox" /> Yes</label><br />
                            <label className='giftcheklab1-2-saf'><input type="checkbox" /> No</label>
                        </div>

                        {/*order now button*/}
                        <button className='cheklin-2-saf'><span className='cheksp-2-saf' >BOOK NOW</span></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Safari