import React from 'react'
import './Footer1.css'
import logo from '../../assets/Zoo.png'
import plant3 from '../../assets/Home/plant 3.png'
import bu from '../../assets/Home/bu.gif'
const Footer1 = () => {
    return (
        <div>
            <img style={{ marginTop: "-800px" }} className="down1" src={plant3} />
            <img className="bu" src={bu} width={300} height={200} alt="Swimming fish" />
            <footer id="Foot" className="footer">
                <div className="foocontainer">
                    <div className="fooimg">
                        <a href='#'><img src={logo}></img></a>
                    </div>
                    <div className="footext">
                        <p className='one'><br />
                            If you have any question, please contact us at <a href="mailto:selvapandi322@gmail.com"
                                className="link">support@gmail.com</a>
                        </p>
                        <ul type="none" class="contact-list">

                            <li className="contact-item">
                                <ion-icon name="location-outline" aria-hidden="true"></ion-icon>

                                <address className="address">
                                    30 Buttonwood St.Pataskala OH 43062
                                </address>
                            </li>

                            <li className="contact-item">
                                <ion-icon name="call-outline" aria-hidden="true"></ion-icon>

                                <a href="tel:+16234567891011" className="contact-link">(+91)-624-569-7897</a>
                            </li>

                        </ul>
                        <ul type="none" className="social-list">

                            <li>
                                <a className="social-link">
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a className="social-link">
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a className="social-link">
                                    <ion-icon name="logo-pinterest"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a className="social-link">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <ion-icon name="logo-github"></ion-icon>
                                </a>
                            </li>

                        </ul>
                        <p className="copyright">
                            © 2023 Made with ♥ by <a className="copyright-link">Vignesh</a>
                        </p>

                    </div>
                    <div className="footer-content">
                        <h4>ABOUT US</h4>
                        <li>
                            <a href="#">ABOUT OUR ZOO</a>
                        </li>
                        <li>
                            <a href="#">ZOO TIMINGS</a>
                        </li>
                        <li>
                            <a href="#">ZOO MAP</a>
                        </li>
                        <li>
                            <a href="#">VISIT</a>
                        </li>
                    </div>
                    <div className="footer-content2">
                        <h4>TICKET</h4>
                        <li>
                            <a href="#">ENTRANCE TICKET</a>
                        </li>
                        <li>
                            <a href="#">TRAVEL TICKET</a>
                        </li>
                        <li>
                            <a href="#">PARKING TICKET</a>
                        </li>
                    </div>
                    <div className="footer-content3">
                        <h4>EDUCATION</h4>
                        <li>
                            <a href="#">INTERSHIP</a>
                        </li>
                        <li>
                            <a href="#">ZOO KEEPER</a>
                        </li>
                        <li>
                            <a href="#">IN & Out REACH</a>
                        </li>
                        <li>
                            <a href="#">SUMMER CAMP</a>
                        </li>
                        <li>
                            <a href="#">YOUTH CLUB</a>
                        </li>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer1