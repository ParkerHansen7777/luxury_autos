import './page.css';
import React, { Component } from 'react';
import CarsList from './cars.component';
//import NewCar from './new_car.component';

export default class Home extends Component {
	render(){
	  return (
		<div className="Page">
		  <header className="Page-header">
			<a href="/">
				<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.freepik.com%2Ffree-vector%2Fluxury-cars-logo_20448-238.jpg&f=1&nofb=1&ipt=14779be3ee8e7715090e4585261433bb01b5664dc4fc98cde4b355f88dbb53a4&ipo=images" width="125" height="125" alt="Luxury Autos Logo"/>
				<span className="LA_span">Luxury Autos Car Dealership</span>
			</a>
		  </header>
		  <div className="Page-body">
			<CarsList />
		  </div>
		  <footer className="Page-footer"><p>Luxury Autos®</p><span>Created by Parker (© 2022)</span></footer>
		</div>
	  )
	}
}


