import React from 'react'
import { useState } from 'react'
import './Signin.css'
import vi3 from '../../assets/autopaly video/vi3.mp4'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Signin() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {console.log(result)
            navigate('/login')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='sinsection'>
             {/** video*/}
             <div className="sinvideo">
                <video autoPlay muted loop id='sinmyvideo'>
                    <source src={vi3} type='video/mp4'></source>
                </video>
            </div>
            <div className="sinform-box">
                <div className="form-value">
                    <form onSubmit={handleSubmit}>
                        <h1 className='sinh1'>signup</h1>
                        <div className="inputbox">
                            <input type="name" onChange={(e) => setName(e.target.value)} required />
                            <label for="">Name</label>
                        </div>

                        <div className="inputbox">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} required />
                            <label for="">Email</label>
                        </div>

                        <div className="inputbox">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} required />
                            <label for="">Password</label>
                        </div>

                        <div className="forget">
                            <label for=""><input type="checkbox" /> i agree privacy policy & terms</label>
                            <a href="#"></a>
                        </div>

                        <button className='si'>sign up</button>
                        <div className="register">
                            <p>Already Have a Account <Link to='/login'><span>Login</span></Link></p>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    )
}

export default Signin