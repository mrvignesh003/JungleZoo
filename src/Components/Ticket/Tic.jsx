import React from 'react'
import { useState } from 'react'
import './tic.css'
import vi5 from '../../assets/autopaly video/vi5.mp4'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Datepicker from './Datepicker'
function Tic() {
    {/*backend connect restapi order form */ }
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [adultticket, setAdultticket] = useState()
    const [childticket, setChildticket] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/Tics',
            { name, phone, adultticket, childticket })
            .then(result => {
                console.log(result)
            })
            .catch(err => console.log(err))
        navigate('/Ticket')
    }
    return (
        <div className='chekbody-2'>
             {/*video*/}
             <div className="chekvideo">
                <video autoPlay muted loop id='chekmyvideo'>
                    <source src={vi5} type='video/mp4'></source>
                </video>
            </div>
            <div className="chekform-box-2">
                <div className="chekform-value-2">
                    <form className='checkfom-2' onSubmit={handleSubmit}>
                        {/*title*/}
                        <h1 className='chekh11-2'>Zoo Entrance Ticket</h1>
                        {/*name*/}
                        <div className="chekinputbox1-2">
                            <input type="text" onChange={(e) => setName(e.target.value)} required />
                            <label>Name</label>
                        </div>
                        {/*email*/}
                        <div className="chekinputbox2-2">
                            <input type="phone" onChange={(e) => setPhone(e.target.value)} required />
                            <label>Phone</label>
                        </div>
                        <Datepicker />
                        <div className="tic-form-1">

                            <label> Adults  :</label>
                            <select onChange={(e) => setAdultticket(e.target.value)}>
                                <option >Per Adults </option>
                                <option onChange={(e) => setAdultticket(e.target.value)}>100</option>
                                <option onChange={(e) => setAdultticket(e.target.value)}>200</option>
                                <option onChange={(e) => setAdultticket(e.target.value)}>300</option>
                                <option onChange={(e) => setAdultticket(e.target.value)}>400</option>
                                <option onChange={(e) => setAdultticket(e.target.value)}>500</option>

                            </select>
                        </div>
                        <div className="tic-form-2">

                            <label >Child  :</label>
                            <select onChange={(e) => setChildticket(e.target.value)}>
                                <option> Per Child</option>
                                <option onChange={(e) => setChildticket(e.target.value)}>50</option>
                                <option onChange={(e) => setChildticket(e.target.value)}>100</option>
                                <option onChange={(e) => setChildticket(e.target.value)}>150</option>
                                <option onChange={(e) => setChildticket(e.target.value)}>200</option>
                                <option onChange={(e) => setChildticket(e.target.value)}>250</option>
                            </select>
                        </div>
                        {/*dummy checkbox*/}
                        <div className="giftchek-2">
                            <label className='gifcheklab-2' for="text">Send Gift ?</label>
                            <label className='giftcheklab-2'><input type="checkbox" /> Yes</label><br />
                            <label className='giftcheklab1-2'><input type="checkbox" /> No</label>
                        </div>

                        {/*order now button*/}
                        <button className='cheklin-2'><span className='cheksp-2' >BOOK NOW</span></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Tic