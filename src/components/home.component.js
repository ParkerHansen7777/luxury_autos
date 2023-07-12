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
				<img src="https://cdn.discordapp.com/attachments/934601346638811137/969044874055803000/la_logo_transp_2000x2000.png" width="125" height="125" alt=""/>
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


