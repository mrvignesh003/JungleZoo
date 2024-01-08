import React from 'react'
import { useState } from 'react'
import './Student.css'
import vi4 from '../../assets/autopaly video/vi4.mp4'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Student() {
    {/*backend connect restapi order form */ }
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [young, setyoung] = useState()
    const [middle, setmiddle] = useState()
    const [Teacher, setTeacher] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/Student',
            { name, phone, young, middle,Teacher })
            .then(result => {
                console.log(result)
            })
            .catch(err => console.log(err))
        navigate('/Ticket')
    }
    return (
        <div className='chekbody-2-stu'>
             {/** video*/}
             <div className="sinvideo">
                <video autoPlay muted loop id='sinmyvideo'>
                    <source src={vi4} type='video/mp4'></source>
                </video>
            </div>
            <div className="chekform-box-2-stu">
                <div className="chekform-value-2-stu">
                    <form className='checkfom-2-stu' onSubmit={handleSubmit}>
                        {/*title*/}
                        <h1 className='chekh11-2-stu'>Student Ticket</h1>
                        {/*name*/}
                        <div className="chekinputbox1-2-stu">
                            <input type="text" onChange={(e) => setName(e.target.value)} rstuired />
                            <label>Name</label>
                        </div>
                        {/*email*/}
                        <div className="chekinputbox2-2-stu">
                            <input type="phone" onChange={(e) => setPhone(e.target.value)} rstuired />
                            <label>Phone</label>
                        </div>
                        <div className="tic-form-1-stu">

                            <label> 1-7Th Std  :</label>
                            <select onChange={(e) => setyoung(e.target.value)}>
                                <option >Per Adults </option>
                                <option onChange={(e) => setyoung(e.target.value)}>30</option>
                                <option onChange={(e) => setyoung(e.target.value)}>40</option>
                                <option onChange={(e) => setyoung(e.target.value)}>50</option>
                                <option onChange={(e) => setyoung(e.target.value)}>60</option>
                                <option onChange={(e) => setyoung(e.target.value)}>70</option>

                            </select>
                        </div>
                        <div className="tic-form-2-stu">

                            <label >8-10Th Std  :</label>
                            <select onChange={(e) => setmiddle(e.target.value)}>
                                <option> Per Child</option>
                                <option onChange={(e) => setmiddle(e.target.value)}>40</option>
                                <option onChange={(e) => setmiddle(e.target.value)}>50</option>
                                <option onChange={(e) => setmiddle(e.target.value)}>60</option>
                                <option onChange={(e) => setmiddle(e.target.value)}>70</option>
                                <option onChange={(e) => setmiddle(e.target.value)}>80</option>
                            </select>
                        </div>
                        <div className="tic-form-3-stu">

                            <label >Teacher :</label>
                            <select onChange={(e) => setTeacher(e.target.value)}>
                                <option> Per</option>
                                <option onChange={(e) => setTeacher(e.target.value)}>50</option>
                                <option onChange={(e) => setTeacher(e.target.value)}>100</option>
                                <option onChange={(e) => setTeacher(e.target.value)}>150</option>
                                <option onChange={(e) => setTeacher(e.target.value)}>200</option>
                                <option onChange={(e) => setTeacher(e.target.value)}>250</option>
                            </select>
                        </div>
                        {/*dummy checkbox*/}
                        <div className="giftchek-2-stu">
                            <label className='gifcheklab-2-stu' for="text">Send Gift ?</label>
                            <label className='giftcheklab-2-stu'><input type="checkbox" /> Yes</label><br />
                            <label className='giftcheklab1-2-stu'><input type="checkbox" /> No</label>
                        </div>

                        {/*order now button*/}
                        <button className='cheklin-2-stu'><span className='cheksp-2-stu' >BOOK NOW</span></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Student