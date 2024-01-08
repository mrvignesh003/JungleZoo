import React from 'react'
import './Summercamp.css'
import entrance from '../../assets/about us/entrance.png'
import SC1 from '../../assets/SUMMERCAMP/SC1.jpg'
import SC2 from '../../assets/SUMMERCAMP/SC2.jpg'
import SC3 from '../../assets/SUMMERCAMP/SC3.jpg'
import Header from '../Header/Header'
import Footer1 from '../Footer/Footer1'
const Summercamp = () => {
  return (
    <div className='internsec'>
      <Header />
      <section>
        <img className="entrance" src={entrance} />
        <div className="indent4">
          <h6>SUMMERCAMP</h6>
          <p>
            Zoo is organizing the Summer Camp since the year 2005 for students in the
            age group of 12 to 18 years for a period of 10 days during the month of
            April and May. Students are exposed to basics of Wildlife conservation,
            Captive Wild Animal management, Animal behavioral studies, Wildlife crimes
            and laws, Health Care Management in Captive Animal and Wildlife Protection
            and its importance. Experienced resource persons and concerned field
            experts are invited to interact with the participants. Field practical
            includes zoo patrol, interaction with animal keepers, visit to Karanji
            Lake Nature Park and Regional Museum of Natural History, which are
            adjacent to the Zoo. At the end the participants will be given
            certificates during the valedictory function.
          </p>
        </div>
        <div className="edimg">
          <img src={SC1} />
          <img src={SC2} />
          <img src={SC3} />

        </div>
      </section>
      <Footer1 />
    </div>
  )
}

export default Summercamp