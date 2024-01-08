import React from 'react'
import './Youthclub.css'
import entrance from '../../assets/about us/entrance.png'
import YC1 from '../../assets/Youth Club/YC1.jpg'
import YC2 from '../../assets/Youth Club/YC2.jpg'
import YC3 from '../../assets/Youth Club/YC3.jpg'
import Header from '../Header/Header'
import Footer1 from '../Footer/Footer1'
const Youthclub = () => {
  return (
    <div className='internsec'>
      <Header />
      <section>
        <img className="entrance" src={entrance} />
        <div className="indent5">
          <h6>
            <b>Youth Club</b>
          </h6>
          <p>
            Youth Club is one of the most unique, prestigious, popular educational
            programs of Mysuru zoo. Youth club is being organized since the year 1992.
            The knowledge we impart to the members of this club is vital to their
            understanding of the components of biodiversity and their interaction. It
            is one of the sustained public awareness and communication program which
            involves teenagers-the citizens of future to enable them to understand the
            aesthetic importance of nature and to maintain a healthy relationship with
            nature.
          </p>
          <p>
            Every year 60 students will be enrolled of age group 12 to 18years, and
            classes will be conducted on Sundays, for 25 weeks between 9.30 a.m. to
            1.30 p.m. The students will interact with resource persons, field experts,
            biologist and scientists. The topics include wildlife management and its
            conservation, Biodiversity, Animal behaviour studies, demonstration of
            tranquilization equipment's, study of insects, birds, reptiles, spiders,
            ants, butterflies, importance of plants, study of mega herbivores and
            Carnivores, marine biology, road ecology, etc.
          </p>
          <p>
            Practical classes include hands on experience at vermicompost and
            gardening. visit to Zoo Hospital, zoo kitchen and store. They have access
            to the zoo library to prepare project reports. Apart from this, the
            students will be taken to Karanji Lake Nature Park, Regional Museum of
            Natural History, Ranganathittu Bird Sanctuary and to a National Park or a
            Wildlife Sanctuary as part of the youth club activities. Students are
            given a certificate of Participation at the end of the event.
          </p>
        </div>
        <div className="edimg">
          <img src={YC1} />
          <img src={YC2} />
          <img src={YC3} />

        </div>
      </section>
      <Footer1 />
    </div>
  )
}

export default Youthclub