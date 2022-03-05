import React from 'react';
import "../assets/css/style.css";
import logo from '../assets/images/l.png';
import cover3 from '../assets/images/cover3.png';
import driver1 from '../assets/images/ellipse-1.png';
import driver2 from '../assets/images/ellipse-2.png';
import driver3 from '../assets/images/ellipse-3.png';
import driver4 from '../assets/images/ellipse-4.png';
import driver5 from '../assets/images/ellipse-5.png';
import driver6 from '../assets/images/ellipse-6.png';
import driver7 from '../assets/images/ellipse-7.png';
import driver8 from '../assets/images/ellipse-8.png';
import driver from '../assets/images/driver04.png';
import Header from './header';
import Footer from './Footer';




const Driverslist = () => {
  return (
    
        <div>
        	<Header />
		<div class="content">

			<section class="intro">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="title">
								<h1>Drivers</h1>
								<h6>High qualified Drivers</h6>
							</div>
							<hr class="blank" />
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<ul class="drivers inline four-columns">
								<li>
            	                    <img src={driver} alt="driver1" />
									<h6>Jane</h6>
									<p>Hyundai Santro</p>
									<p>
										<i class="ion-android-star"></i>
										<i class="ion-android-star"></i>
										<i class="ion-android-star"></i>
										<i class="ion-android-star-half"></i>
										<i class="ion-android-star-outline"></i>
									</p>

								</li>
								<li>
                                <img src={driver} alt="driver2" />

									<h6>Manoj</h6>
									<p>Toyota Hilux</p>
									<p>
										<i class="ion-android-star"></i>
										<i class="ion-android-star"></i>
										<i class="ion-android-star"></i>
										<i class="ion-android-star-half"></i>
										<i class="ion-android-star-outline"></i>
									</p>

								</li>
								<li>
                                <img src={driver} alt="driver8" />

									<h6>Christopher Nolan</h6>
									<p>Nissan Navara</p>
									<p>
										<i class="ion-android-star"></i>
										<i class="ion-android-star"></i>
										<i class="ion-android-star"></i>
										<i class="ion-android-star-half"></i>
										<i class="ion-android-star-outline"></i>
									</p>
								</li>
								<li>
                                <img src={driver} alt="driver3" />

									<h6>Zack Synder</h6>
									<p>Mitsubishi L200</p>
									<p>
										<i class="ion-android-star"></i>
										<i class="ion-android-star"></i>
										<i class="ion-android-star"></i>
										<i class="ion-android-star-half"></i>
										<i class="ion-android-star-outline"></i>
									</p>
								</li>
                                <li>
                                <img src={driver} alt="driver4" />

									<h6>Praveen</h6>
									<p>Hyundai Santro</p>
									<p>
										<i class="ion-android-star"></i>
										<i class="ion-android-star"></i>
										<i class="ion-android-star"></i>
										<i class="ion-android-star-half"></i>
										<i class="ion-android-star-outline"></i>
									</p>

								</li>
								<li>
                                <img src={driver} alt="driver5" />

									<h6>Mohan</h6>
									<p>Toyota Hilux</p>
									<p>
										<i class="ion-android-star"></i>
										<i class="ion-android-star"></i>
										<i class="ion-android-star"></i>
										<i class="ion-android-star-half"></i>
										<i class="ion-android-star-outline"></i>
									</p>

								</li>
								<li>
                                <img src={driver} alt="driver6" />

									<h6>Dinesh</h6>
									<p>Nissan Navara</p>
									<p>
										<i class="ion-android-star"></i>
										<i class="ion-android-star"></i>
										<i class="ion-android-star"></i>
										<i class="ion-android-star-half"></i>
										<i class="ion-android-star-outline"></i>
									</p>
								</li>
								<li>
                                <img src={driver} alt="driver7" />

									<h6>Vimal</h6>
									<p>Mitsubishi L200</p>
									<p>
										<i class="ion-android-star"></i>
										<i class="ion-android-star"></i>
										<i class="ion-android-star"></i>
										<i class="ion-android-star-half"></i>
										<i class="ion-android-star-outline"></i>
									</p>
								</li>
								
								
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section class="promo">
            	<img src={cover3} alt="cover3" />
				<div class="tint from-left"></div>
				<div class="container">
					<div class="row">
						<div class="col-sm-5">
							<hgroup>
								<h3>OUR CABS</h3>
								<h6>VIEW OUR TAXIS</h6>
							</hgroup>
							<p>We Have Industry Standard High Quality & Comfortable Cabs that will surely comforts you. </p>
							<a href="cars.html" class="btn btn-secondary">CHECK OUT OUR CARS</a>
						</div>
					</div>
				</div>
			</section>




        

		</div>
		<Footer />

        </div>
    
  );
}

export default Driverslist;