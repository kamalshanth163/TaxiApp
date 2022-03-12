import React from 'react';
import "../assets/css/style.css";
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';


const Footer = () => {
  return (
    
        <div>
            <footer class="footer">

            <svg height="20" width="2560" class="pattern">
                <defs>
                    <pattern id="footer-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <rect width="10" height="10" />
                        <rect x="10" y="10" width="10" height="10" />
                    </pattern>
                    <mask id="footer-mask" x="0" y="0" width="2560" height="20" >
                        <rect x="0" y="0"  width="2560" height="20" />
                    </mask>
                </defs>
                <rect x="0" y="0" width="2560" height="20" id="footer-image" />
            </svg>

            <div class="widgets">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <div class="widget">
                                <h6>About us</h6>
                                <p>The City Taxi software is a platform that facilitates a real time connection between the taxi passenger and the taxi driver, enabling mutual engagement for the receipt and delivery of a seamless service.</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <div class="widget">
                                <h6>Quick links</h6>
                                <ul class="quick-links">
                                <NavLink to="/">
                                    <li><a>Home</a></li>
                                </NavLink>
                                <NavLink to="/about-us">
                                    <li><a>About</a></li>
                                </NavLink>

                                <NavLink to="/services">
                                    <li><a>Services</a></li>
                                </NavLink>

                                <NavLink to="/drivers-list">
                                    <li><a>Drivers</a></li>
                                </NavLink>

                                <NavLink to="/vehicles">
                                    <li><a>Vehicles</a></li>
                                </NavLink>

                                <NavLink to="/contact">
                                    <li><a>Contact</a></li>
                                </NavLink>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <div class="widget">
                                <h6>Contact</h6>
                                <ul class="contact">
                                    <li class="hotline"><a href="tel:94117433433">+94 117 423 423</a></li>
                                    <li class="phone"><a href="tel:212-647-0772">+94 114 550 550</a></li>
                                    <li class="email"><a href="mailto:info@taxigrabber.biz">info@citytaxi.com</a></li>
                                    <li class="address">City Taxi (Pvt) Ltd. <br />
                                                        No 309, High Level Road, <br />
                                                        Kandy, Sri Lanka</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="credits">
                <div class="container">
                    <div class="copyright">&copy; City Taxi</div>
                    <ul class="social-links">
                        <li><a href="htp://facebook.com">Facebook</a></li>
                        <li><a href="htp://twitter.com">Twitter</a></li>
                        <li><a href="htp://linkedin.com">LinkedIn</a></li>
                        <li><a href="htp://instagram.com">Instagram</a></li>
                    </ul>
                </div>
            </div>
            </footer>
        </div>
    
  );
}

export default Footer;