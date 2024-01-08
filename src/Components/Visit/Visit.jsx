import React from 'react'
import Battervehicles from '../../assets/amenities img/Battery operated vehicles.jpg'
import EmergencyContact from '../../assets/amenities img/Emergency Contact details.jpg'
import Firstaidkit from '../../assets/amenities img/First aid kit.png'
import HandsfreeSanitizer from '../../assets/amenities img/4.png'
import ETicketing from '../../assets/amenities img/3.png'
import Foodcourt from '../../assets/amenities img/Food court.jpg'
import Library from '../../assets/amenities img/Library.jpg'
import Luggageroom from '../../assets/amenities img/Luggage room.jpg'
import Mothercareunit from '../../assets/amenities img/Mother care unit.jpg'
import Parking from '../../assets/amenities img/Parking.jpg'
import ROWater from '../../assets/amenities img/R.O Water.jpg'
import bench from '../../assets/amenities img/bench.png'
import Resturant from '../../assets/amenities img/Resturant.jpg'
import Shelters from '../../assets/amenities img/Shelters.jpg'
import Souvenirshop from '../../assets/amenities img/Souvenir shop.jpg'
import Wheelchair from '../../assets/amenities img/Wheel chair.jpg'
import './Visit.css'
import entrance from '../../assets/about us/entrance.png'
import Header from '../Header/Header'
import Footer1 from '../Footer/Footer1'
const Visit = () => {
    return (
        <div className='internsec'>
            <Header />
            <img className="entrance" src={entrance} />
            <div className="indent">
                <h6>Zoo Timings</h6>
                <p>
                    Every Tuesday Holiday<br />
                    Other Days - 08:30 AM to 5:30 PM</p>
                <p> Best Time To Visit The Zoo</p>
                <p> Any time of the day is suitable for visiting the Zoo. Coving to its lush green cover, the orientation of animal houses and visitor amenities. Those who wish to focus on only big cats are advised to schedule the visit early morning or evening as cats tend to rest during the day. There are 149 species housed at the zoo.
                </p>
                <h5>Visitor Amenities</h5>
            </div>
            <div className='visita'>
            <div className="responsive">
                <img src={Battervehicles} />
                <p>Battery operated vehicles</p>
                </div>
                <div className="responsive">
                <img src={EmergencyContact} />
                <p>Emergency Contact details</p>
                </div>
                <div className="responsive">
                <img src={Firstaidkit} />
                <p>First aid Facility</p>
                </div>
                <div className="responsive">
                <img src={HandsfreeSanitizer} />
                <p>Hands free Sanitizer</p>
                </div>
                <div className="responsive">
                <img src={ETicketing} />
                <p>E-Ticketing</p>
                </div>
                <div className="responsive">
                <img src={Foodcourt} />
                <p>Food court</p>
                </div>
                <div className="responsive">
                <img src={Library} />
                <p>Library</p>
                </div>
                <div className="responsive">
                <img src={Luggageroom} />
                <p>Luggage room</p>
                </div>
                <div className="responsive">
                <img src={Mothercareunit} />
                <p>Child care unit</p>
                </div>
                <div className="responsive">
                <img src={Parking} />
                <p>Parking</p>
                </div>
                <div className="responsive">
                <img src={ROWater} />
                <p>Portable R.O Drinking Water</p>
                </div>
                <div className="responsive">
                <img src={bench} />
                <p>Resting benches</p>
                </div>
                <div className="responsive">
                <img src={Resturant} />
                <p>Resturant</p>
                </div>
                <div className="responsive">
                <img src={Shelters} />
                <p>Shelters</p>
                </div>
                <div className="responsive">
                <img src={Souvenirshop} />
                <p>Souvenir shop</p>
                </div>
                <div className="responsive">
                <img src={Wheelchair} />
                <p>Wheel chair</p>
                </div>
         
            </div>
           <Footer1 />
           
        </div >
    )
}

export default Visit