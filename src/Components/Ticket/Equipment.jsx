import React from 'react'
import { useState } from 'react'
import './Equipment.css'
import vi3 from '../../assets/autopaly video/vi3.mp4'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Equip() {
    {/*backend connect restapi order form */ }
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [VideoCamera, setVideoCamera] = useState()
    const [Camera, setCamera] = useState()
    const [Luggage, setLuggage] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/Equip',
            { name, phone, VideoCamera,Camera,Luggage })
            .then(result => {
                console.log(result)
            })
            .catch(err => console.log(err))
            navigate('/Ticket')
    }
    return (
        <div className='chekbody-2-equ'>
             {/** video*/}
             <div className="sinvideo">
                <video autoPlay muted loop id='sinmyvideo'>
                    <source src={vi3} type='video/mp4'></source>
                </video>
            </div>
            <div className="chekform-box-2-equ">
                <div className="chekform-value-2-equ">
                    <form className='checkfom-2-equ' onSubmit={handleSubmit}>
                        {/*title*/}
                        <h1 className='chekh11-2-equ'>Camera & Luggage Ticket</h1>
                        {/*name*/}
                        <div className="chekinputbox1-2-equ">
                            <input type="text" onChange={(e) => setName(e.target.value)} required />
                            <label>Name</label>
                        </div>
                        {/*email*/}
                        <div className="chekinputbox2-2-equ">
                            <input type="phone" onChange={(e) => setPhone(e.target.value)} required />
                            <label>Phone</label>
                        </div>
                        <div className="tic-form-1-equ">

                            <label> VideoCamera  :</label>
                            <select onChange={(e) => setVideoCamera(e.target.value)}>
                                <option >Per</option>
                                <option onChange={(e) => setVideoCamera(e.target.value)}>200</option>
                                <option onChange={(e) => setVideoCamera(e.target.value)}>400</option>
                            </select>
                        </div>
                        <div className="tic-form-2-equ">

                            <label >Camera  :</label>
                            <select  onChange={(e) => setCamera(e.target.value)}>
                                <option> Per</option>
                                <option onChange={(e) => setCamera(e.target.value)}>100</option>
                                <option onChange={(e) => setCamera(e.target.value)}>200</option>
                                <option onChange={(e) => setCamera(e.target.value)}>300</option>
                            </select>
                        </div>
                        <div className="tic-form-3-equ">

                            <label >Luggage :</label>
                            <select  onChange={(e) => setLuggage(e.target.value)}>
                                <option> Per</option>
                                <option onChange={(e) => setLuggage(e.target.value)}>15</option>
                                <option onChange={(e) => setLuggage(e.target.value)}>30</option>
                                <option onChange={(e) => setLuggage(e.target.value)}>45</option>
                                <option onChange={(e) => setLuggage(e.target.value)}>60</option>
                                <option onChange={(e) => setLuggage(e.target.value)}>75</option>
                            </select>
                        </div>
                        {/*dummy checkbox*/}
                        <div className="giftchek-3-equ">
                            <label className='gifcheklab-3-equ' for="text">Send Gift ?</label>
                            <label className='giftcheklab-3-equ'><input type="checkbox" /> Yes</label><br />
                            <label className='giftcheklab1-3-equ'><input type="checkbox" /> No</label>
                        </div>

                        {/*order now button*/}
                        <button className='cheklin-2-equ'><span className='cheksp-2-equ' >BOOK NOW</span></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Equip