import React, { Component } from 'react';



export default class App extends Component {
  render() {
    return (
      	<div className="dd_body">

	      	<section className="row clearfix">
	      		<div className="col-md-5 dd_row1col1 slideInUp">
	      			<h2>Apply for Financing</h2>
	      			<p>Let us help you finance your next vehicle purchase with a used car loan to fit your budget and lifestyle.</p>
	      			<p><a href="#">Let's Get Started!</a></p>
	      		</div>
	      		<div className="col-md-7 dd_row1col2 slideInUp">
	      			<h3>Credit Application Form</h3>
	      			<input type="text" className="form-control dd_input" placeholder="First Name"></input>
	      			<input type="text" className="form-control dd_input" placeholder="Last Name"></input>
	      			<input type="text" className="form-control dd_input" placeholder="Email Address"></input>
	      			<input type="text" className="form-control dd_input" placeholder="Phone Number"></input>
	      			<button>
	      				<span>Submit</span> <div className="arrow"></div>
	      			</button>
	      		</div>
	      	</section>
	      	<section className="row clearfix dd_row2">
	      		<div className="col-md-5 dd_row2col1 slideInUp">
	      			<h2>About Us</h2>
	      			<p>Parkdale East Auto &amp; Truck Centre, located at 77 Parkdale Ave North in Hamilton, is committed to delivering nothing but the best in quality and service. We know that you have high expectations, and as a car dealer, we enjoy the challenges of meeting and exceeding those standards. Come visit us today and allow us to demonstrate our commitment of excellenece to you!</p>
	      		</div>
	      	</section>
	      	<section className="row clearfix dd_row3">
	      		<div className="col-md-5 dd_row3col1 slideInUp">
	      			<div className="col-md-12">
	      				<h3>Hours</h3>
	      			</div>
	      			<div className="col-md-7 clearfix dd_hours">
	      				<p className="dd_dow">Monday</p>
	      				<p className="dd_dow">Tuesday</p>
	      				<p className="dd_dow">Wednesday</p>
	      				<p className="dd_dow">Thursday</p>
	      				<p className="dd_dow">Friday</p>
	      				<p className="dd_dow">Saturday</p>
	      				<p className="dd_dow">Sunday</p>
	      			</div>
	      			<div className="col-md-5 clearfix dd_hours">
	      				<p className="dd_tod">9:00am - 8:00pm</p>
	      				<p className="dd_tod">9:00am - 8:00pm</p>
	      				<p className="dd_tod">9:00am - 8:00pm</p>
	      				<p className="dd_tod">9:00am - 8:00pm</p>
	      				<p className="dd_tod">9:00am - 8:00pm</p>
	      				<p className="dd_tod">9:00am - 6:00pm</p>
	      				<p className="dd_tod">Closed</p>
	      			</div>
	      		</div>
	      		<div className="col-md-7" id="map">
	      		</div>
	      	</section>
	      	<section className="row clearfix dd_row4">
	      		<p className="col-md-5 dd_footer_left">
	      			&copy; Parkdale East Auto
	      		</p>
	      		<p className="col-md-7 dd_row4col2 dd_footer_right">
	      			<i className="fa fa-map-marker" aria-hidden="true"></i>
	      			77 Parkdale Ave North, Hamilton, ON L8H 5X1
	      			<i className="fa fa-phone" aria-hidden="true"></i>
	      			905-544-5524
	      		</p>
	      	</section>

      	</div>
    );
  }
}



//CSS IS RESIZING THE FOOTER AT 575 PX
//IT LOOKS BETTER WITH THE &copy; AT THE BOTTOM, RIGHT?
//THIS IS HOW WE MAKE SURE THE &copy; IS AT THE BOTTOM...
$(document).ready(function(){
	$(window).resize(function(){
		if ($(document).width() <= 575){
			$('.dd_footer_right').insertBefore('.dd_footer_left');
		} else {
			$('.dd_footer_right').insertAfter('.dd_footer_left');
		}
	});
});