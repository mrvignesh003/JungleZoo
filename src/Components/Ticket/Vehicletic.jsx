import React from 'react'
import { useState } from 'react'
import './Vehicletic.css'
import vi6 from '../../assets/autopaly video/vi6.mp4'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Vehicletic() {
    {/*backend connect restapi order form */ }
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [cycleticket, setCycle] = useState()
    const [Twowheelerticket, setTwowheeler] = useState()
    const [carticket, setCar] = useState()
    const [minibusticket, setMinibus] = useState()
    const [busticket, setBus] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/Vehicletics',
            { name, phone, cycleticket, Twowheelerticket, carticket, minibusticket, busticket })
            .then(result => {
                console.log(result)
            })
            .catch(err => console.log(err))
        navigate('/Ticket')
    }
    return (
        <div className='chekbody-2-vehi'>
             {/** video*/}
             <div className="sinvideo">
                <video autoPlay muted loop id='sinmyvideo'>
                    <source src={vi6} type='video/mp4'></source>
                </video>
            </div>
            <div className="chekform-box-2-vehi">
                <div className="chekform-value-2-vehi">
                    <form className='checkfom-2' onSubmit={handleSubmit}>
                        {/*title*/}
                        <h1 className='chekh11-2-vehi'>Vehicle Parking Ticket</h1>
                        {/*name*/}
                        <div className="chekinputbox1-2-vehi">
                            <input type="text" onChange={(e) => setName(e.target.value)} required />
                            <label>Name</label>
                        </div>
                        {/*email*/}
                        <div className="chekinputbox2-2-vehi">
                            <input type="phone" onChange={(e) => setPhone(e.target.value)} required />
                            <label>Phone</label>
                        </div>
                        <div className="tic-form-1-vehi">

                            <label>Cycle :</label>
                            <select onChange={(e) => setCycle(e.target.value)}>
                                <option >Per Cycle </option>
                                <option onChange={(e) => setCycle(e.target.value)}> 15</option>
                                <option onChange={(e) => setCycle(e.target.value)}>30</option>
                                <option onChange={(e) => setCycle(e.target.value)}>45</option>
                                <option onChange={(e) => setCycle(e.target.value)}>60</option>
                                <option onChange={(e) => setCycle(e.target.value)}>75</option>

                            </select>
                        </div>
                        <div className="tic-form-2-vehi">

                            <label >Two Wheeler   :</label>
                            <select onChange={(e) => setTwowheeler(e.target.value)}>
                                <option> Per Two Wheeler </option>
                                <option onChange={(e) => setTwowheeler(e.target.value)}>50</option>
                                <option onChange={(e) => setTwowheeler(e.target.value)}>100</option>
                                <option onChange={(e) => setTwowheeler(e.target.value)}>150</option>
                                <option onChange={(e) => setTwowheeler(e.target.value)}>200</option>
                                <option onChange={(e) => setTwowheeler(e.target.value)}>250</option>
                            </select>
                        </div>
                        <div className="tic-form-3-vehi">

                            <label >Car / Jeep / Auto   :</label>
                            <select onChange={(e) => setCar(e.target.value)}>
                                <option> Per Car / Jeep / Auto </option>
                                <option onChange={(e) => setCar(e.target.value)}>50</option>
                                <option onChange={(e) => setCar(e.target.value)}>100</option>
                                <option onChange={(e) => setCar(e.target.value)}>150</option>
                                <option onChange={(e) => setCar(e.target.value)}>200</option>
                                <option onChange={(e) => setCar(e.target.value)}>250</option>
                            </select>
                        </div>
                        <div className="tic-form-4-vehi">

                            <label >Mini Bus / Tempo   :</label>
                            <select onChange={(e) => setMinibus(e.target.value)}>
                                <option> Per Mini Bus / Tempo </option>
                                <option onChange={(e) => setMinibus(e.target.value)}>50</option>
                                <option onChange={(e) => setMinibus(e.target.value)}>100</option>
                                <option onChange={(e) => setMinibus(e.target.value)}>150</option>
                                <option onChange={(e) => setMinibus(e.target.value)}>200</option>
                                <option onChange={(e) => setMinibus(e.target.value)}>250</option>
                            </select>
                        </div>
                        <div className="tic-form-5-vehi">

                            <label >Bus   :</label>
                            <select onChange={(e) => setBus(e.target.value)}>
                                <option> Per Bus </option>
                                <option onChange={(e) => setBus(e.target.value)}>50</option>
                                <option onChange={(e) => setBus(e.target.value)}>100</option>
                                <option onChange={(e) => setBus(e.target.value)}>150</option>
                                <option onChange={(e) => setBus(e.target.value)}>200</option>
                                <option onChange={(e) => setBus(e.target.value)}>250</option>
                            </select>
                        </div>
                        {/*dummy checkbox*/}
                        <div className="giftchek-2-vehi">
                            <label className='gifcheklab-2-vehi' for="text">Send Gift ?</label>
                            <label className='giftcheklab-2-vehi'><input type="checkbox" /> Yes</label><br />
                            <label className='giftcheklab1-2-vehi'><input type="checkbox" /> No</label>
                        </div>

                        {/*order now button*/}
                        <button className='cheklin-2-vehi'><span className='cheksp-2-vehi' >BOOK NOW</span></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Vehicletic