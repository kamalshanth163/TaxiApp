import React from 'react';
import "../assets/css/style.css";
import vision from '../assets/images/vision.png';
import mission from '../assets/images/mission.png';
import logo from '../assets/images/l.png';
import cover2 from '../assets/images/cover2.png';
import Header from './header';
import Footer from './Footer';



const Services = () => {
  return (
    
        <div>
        		
		<Header />

		<div class="content">


        <section class="intro">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="title">
								<h1>Services</h1>
								<h3>We serve people who require a temporary vehicle for their purpose.</h3>
							</div>
							<hr class="blank" />
						</div>
					</div>
					<div class="row">
						<div class="col-sm-4 text-center">
							<p><i class="icon-road-pin icon-circle icon-big"></i></p>
							<h6>Local routes</h6>
							<p>&nbsp;</p>
						</div>
						<div class="col-sm-4 text-center">
							<p><i class="icon-airplane-1 icon-circle icon-big"></i></p>
							<h6>Airport pickups</h6>
							<p>&nbsp;</p>
						</div>
						<div class="col-sm-4 text-center">
							<p><i class="icon-business-man-3 icon-circle icon-big"></i></p>
							<h6>Business trips</h6>
							<p>&nbsp;</p>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-4 text-center">
							<p><i class="icon-car-four-wheel icon-circle icon-big"></i></p>
							<h6>VIP taxi</h6>
							<p>&nbsp;</p>
						</div>
						<div class="col-sm-4 text-center">
							<p><i class="icon-credit-card icon-circle icon-big"></i></p>
							<h6>Shopping</h6>
							<p>&nbsp;</p>
						</div>
						<div class="col-sm-4 text-center">
							<p><i class="icon-truck-2 icon-circle icon-big"></i></p>
							<h6>Truck taxi</h6>
							<p>&nbsp;</p>
						</div>
					</div>
				</div>
			</section>

			<section class="promo">
            	<img src={cover2} alt="cover2" />
				<div class="tint from-left"></div>
				<div class="container">
					<div class="row">
						<div class="col-sm-5">
							<hgroup>
								<h3>NOT AN AVERAGE TAXI COMPANY</h3>
								<h6>WHY CHOOSE US</h6>
							</hgroup>
							<p>Whether you need a quick trip into town, or are looking to travel across the country, you won't find a more reasonably-priced or reliable service. I pride myself on a clean, comfortable cars and my commitment to ensuring you have a safe and relaxing trip. Easy to book, and with an on-time guarantee, you'll always be satisfied with my taxi service. To find out more or to book your next trip, get in touch today!</p>
							<a href="about.html" class="btn btn-secondary">READ MORE ABOUT OUR DRIVERS</a>
						</div>
					</div>
				</div>
			</section>

		</div>
		<Footer />

        </div>
    
  );
}

export default Services;