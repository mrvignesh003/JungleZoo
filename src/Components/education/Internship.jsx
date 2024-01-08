import React from 'react'
import internship from '../../assets/intership/internship.jpg'
import './Internship.css'
import entrance from '../../assets/about us/entrance.png'
import Header from '../Header/Header'
import Footer1 from '../Footer/Footer1'
const Internship = () => {
  return (
    <div className='internsec'>
      <Header />
      <section >
        <img className="entrance" src={entrance} />
        <div className="indent">
          <h6>INTERNSHIP</h6>
          <p>
            Mysuru zoo is conducting internship programme for the veterinary students
            every year. Students from Bangalore, Pondicherry and Bidar Veterinary
            College were undergone internship programme for one week period in the zoo
            under the guidance of experienced zoo veterinarians, The main issues
            covered are management concept, treatment including tranquilization,
            behavioral studies and feeding aspects. The students after completing the
            internship programme will be given certificates. We select Veterinary
            Graduates and life science graduates to do internship and to carry out
            projectwhen approached with prior approval from the Zoo management on
            various aspects related to wildlife and conservation.Training programme
            for Inservice, and Probation officers of various departments on wildlife
            and related aspects. Capacity building and training programme for staff
            members of other zoos.
          </p>
        </div>
        <div className="edimg">
          <img src={internship} />
          <img src={internship} />
          <img src={internship} />


        </div>
      </section>

      <Footer1 />
    </div>
  )
}

export default Internship