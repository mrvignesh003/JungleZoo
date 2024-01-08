import React from 'react'
import './Inout.css'
import entrance from '../../assets/about us/entrance.png'
import IR1 from '../../assets/inreach and outreach programme/IR1.jpg'
import IR2 from '../../assets/inreach and outreach programme/IR2.jpg'
import IR3 from '../../assets/inreach and outreach programme/IR3.jpg'
import Header from '../Header/Header'
import Footer1 from '../Footer/Footer1'
const Inout = () => {
  return (
    <div className='internsec'>
      <Header />
      <section>
        <img className="entrance" src={entrance} />
        <div className="indent3">
          <h6>Zoo Inreach Programme</h6>
          <p>
            This nature awareness program is conducted within zoo premises wherein
            participants are exposed to importance of wildlife and its conservation.
            This program involves Zoo summer camp, Youth Club, Conservation talk, Zoo
            Keepers training, Zoo exposer visits for school and college students, work
            experience attachment for vocational courses like Veterinary Science,
            Forestry and other courses like Wildlife Sciences, Zoology etc.,
            attachments and workshops for field staff and officers of State Forest
            Departments on Ex situ Conservation, Captive management of wild animals
            and Rescue and Rehabilitation of Wild animals. Subject Matter specialists
            interact with participants.
          </p>
          <h6>Zoo Outreach Programme</h6>
          <p>
            In this Program Resource persons namely Education Officer, Biologists,
            Veterinary Officer etc., they visit various schools, colleges, various
            training institutes and field officers of forest departments to create
            awareness about wildlife and its conservation, captive management of wild
            animals, Rescue and rehabilitation of wild animals.
          </p>
        </div>
        <div className="edimg">
          <img src={IR1} />
          <img src={IR2} />
          <img src={IR3} />

        </div>
      </section>
      <Footer1 />
    </div>
  )
}

export default Inout