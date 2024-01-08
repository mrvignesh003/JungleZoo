import React from 'react'
import { useState } from 'react'
import './Explore.css'
import vi9 from '../../assets/autopaly video/vi9.mp4'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Explore() {
    {/*backend connect restapi order form */ }
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [adultticket, setAdultticket] = useState()
    const [childticket, setChildticket] = useState()
    const [Senior, setSenior] = useState()
    const [Online, setOnline] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/Explore',
            { name, phone, adultticket, childticket,Senior,Online })
            .then(result => {
                console.log(result)
            })
            .catch(err => console.log(err))
        navigate('/Ticket')
    }
    return (
        <div className='chekbody-2-exp'>
             {/** video*/}
             <div className="sinvideo">
                <video autoPlay muted loop id='sinmyvideo'>
                    <source src={vi9} type='video/mp4'></source>
                </video>
            </div>
            <div className="chekform-box-2-exp">
                <div className="chekform-value-2-exp">
                    <form className='checkfom-2-exp' onSubmit={handleSubmit}>
                        {/*title*/}
                        <h1 className='chekh11-2-exp'>Battery Vehicles Ticket</h1>
                        {/*name*/}
                        <div className="chekinputbox1-2-exp">
                            <input type="text" onChange={(e) => setName(e.target.value)} rexpired />
                            <label>Name</label>
                        </div>
                        {/*email*/}
                        <div className="chekinputbox2-2-exp">
                            <input type="phone" onChange={(e) => setPhone(e.target.value)} rexpired />
                            <label>Phone</label>
                        </div>
                        <div className="tic-form-1-exp">

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
                        <div className="tic-form-2-exp">

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
                        <div className="tic-form-3-exp">

                            <label >Senior :</label>
                            <select onChange={(e) => setSenior(e.target.value)}>
                                <option> Per</option>
                                <option onChange={(e) => setSenior(e.target.value)}>100</option>
                                <option onChange={(e) => setSenior(e.target.value)}>200</option>
                                <option onChange={(e) => setSenior(e.target.value)}>300</option>
                                <option onChange={(e) => setSenior(e.target.value)}>400</option>
                                <option onChange={(e) => setSenior(e.target.value)}>500</option>
                            </select>
                        </div>
                        <div className="tic-form-4-exp">

                            <label >Online  :</label>
                            <select onChange={(e) => setOnline(e.target.value)}>
                                <option> Per</option>
                                <option onChange={(e) => setOnline(e.target.value)}>100</option>
                                <option onChange={(e) => setOnline(e.target.value)}>200</option>
                                <option onChange={(e) => setOnline(e.target.value)}>300</option>
                                <option onChange={(e) => setOnline(e.target.value)}>400</option>
                                <option onChange={(e) => setOnline(e.target.value)}>500</option>
                            </select>
                        </div>
                        {/*dummy checkbox*/}
                        <div className="giftchek-2-exp">
                            <label className='gifcheklab-2-exp' for="text">Send Gift ?</label>
                            <label className='giftcheklab-2-exp'><input type="checkbox" /> Yes</label><br />
                            <label className='giftcheklab1-2-exp'><input type="checkbox" /> No</label>
                        </div>

                        {/*order now button*/}
                        <button className='cheklin-2-exp'><span className='cheksp-2-exp' >BOOK NOW</span></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Explore