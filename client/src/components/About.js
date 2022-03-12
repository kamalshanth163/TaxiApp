import React from 'react';
import "../assets/css/style.css";
import vision from '../assets/images/vision.png';
import mission from '../assets/images/mission.png';
import logo from '../assets/images/l.png';
import cover from '../assets/images/cover.png';
import Header from './header';
import Footer from './Footer';




const About = () => {
  return (
    
        <div>
        <Header />

		

		<div class="content">


			<section class="intro">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="title">
								<h1>About us</h1>
								<h6>And our company</h6>
							</div>
							<p class="text-center"><big>The pioneer in shaping the cab/taxi service industry in Sri Lanka. City Taxi is Sri Lanka's 
								Number one cab/taxi service provider occupying 70% of the market share in the industry today. Thus providing complete 
								bouquet of end to end transportation solutions through its fleet of 400 cars varying in a wide range of luxury to semi 
								luxury cars. Ensuring passenger comfort & safety to the minutest detail, City Taxi has pulled out all stops, from bringing 
								in the latest technology to setting up 24/7 customer support centers , fully fledged phone app for bookings thus introducing 
								customized solutions for all customer segments, the company has focused on all efforts towards putting the consumer first. 
								Having started its operations in 2000, City Taxi has further prolonged to fill up the niches that were prevailing in the marketplace by introducing City 
								Taxi Vans and Budget Meter Taxi</big></p>
						</div>
					</div>
				</div>
			</section>

			<section class="highlights">
				<div class="container">
					<div class="row flex-row">
						<div class="col-sm-6 flex-column">
						<img src={vision} alt="vision" />
						</div>
						<div class="col-sm-6 flex-column">
							<hgroup>
								<h3>Our Vision</h3>
								<h6>WE CARE ABOUT OUR PASSANGERS COMFORT</h6>
							</hgroup>
							<p>To be the preferred cab / taxi service provider mainly in Kandy and immediate suburbs among the cab users and within the corporate client by providing excellent, quality and on time service by closely monitoring the day to day operations, immediately addressing client complaints and maintaining high standard of customer orientation.</p>
						</div>
					</div>
					<div class="row flex-row">
						<div class="col-sm-6 flex-column">
							<hgroup>
								<h3>Mission Statement</h3>
								<h6>WHEREVER YOU HAVE TO GO</h6>
							</hgroup>
							<p>Whilst our well maintained variety of fleet and highly professional chauffeurs 
								ensuring the comfort & safety of our rides, our valued customers matter most to us. 
								City Taxi has set high standards In order to achieve our vision by enduring strict 
								regulations and policies to ensure discipline and honesty among our staff members. </p>
						</div>
						<div class="col-sm-6 flex-column">
						<img src={mission} alt="mission" />
						</div>
					</div>
				</div>
			</section>

			<section class="promo">
			<img src={cover} alt="cover" />
				<div class="tint from-right"></div>
				<div class="container">
					<div class="row">
						<div class="col-sm-5 col-sm-offset-7">
							<hgroup>
								<h3>HIGH QUALIFIED DRIVERS</h3>
								<h6>WE INVEST IN BEST STAFF</h6>
							</hgroup>
							<p>If you’re a frequent traveller, for work or pleasure (lucky you!) I understand how important it is to have a reliable transfer from home to the airport, and back again.I will always arrive on-time, get you there safely, and be there waiting for you when you return. Never again will you have to schlep to the train, or stand in line for an overpriced black cab. Instead, I'll greet you by name, and you'll arrive refreshed and relaxed.</p>
						</div>
					</div>
				</div>
			</section>

		</div>
		


		<Footer />


        </div>
    
  );
}

export default About;