import React, { Component } from 'react';
import axios from 'axios'


export default class NewCar extends Component {
constructor(props) {
        super(props);
		
		this.onChangePicture = this.onChangePicture.bind(this);
		this.onChangeMake = this.onChangeMake.bind(this);
        this.onChangeModel = this.onChangeModel.bind(this);
		this.onChangeSeats = this.onChangeSeats.bind(this);
		this.onChangeType = this.onChangeType.bind(this);
		this.onChangeRental = this.onChangeRental.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            picture: '',
			make: '',
			model: '',
            seats: '',
			type: '',
            rental_price: '',
        }
    }
	
	
	onChangePicture(e) {
        this.setState({
            picture: e.target.value
        });
    }
	
	onChangeMake(e) {
        this.setState({
            make: e.target.value
        });
    }
	
	onChangeModel(e) {
        this.setState({
            model: e.target.value
        });
    }
	
	onChangeSeats(e) {
        this.setState({
            seats: e.target.value
        });
    }
	
	onChangeType(e) {
        this.setState({
            type: e.target.value
        });
    }
	
	onChangeRental(e) {
        this.setState({
            rental_price: e.target.value
        });
    }
	
	onSubmit(e) {
        e.preventDefault();

        const car = {
            picture: this.state.picture,
			make: this.state.make,
			model: this.state.model,
            seats: this.state.seats,
			type: this.state.type,
            rental_price: this.state.rental_price,
        }

        console.log(car);

        axios.post('http://localhost:5000/cars/add', car)
            .then(res => console.log(res.data));
       
	   window.location = '/';
            
    }
	
	render(){
        return(
            <div className="page">
                <h3>Add New Car</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Picture: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.picture}
                            onChange={this.onChangePicture}
                            />
                    </div>
					<div className="form-group">
                        <label>Make: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.make}
                            onChange={this.onChangeMake}
                            />
                    </div>
					<div className="form-group">
                        <label>Model: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.model}
                            onChange={this.onChangeModel}
                            />
                    </div>
                    <div className="form-group">
                        <label>Seats: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.seats}
                            onChange={this.onChangeSeats}
                            />
                    </div>
					<div className="form-group">
                        <label>Type: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeType}
                            />
                    </div>
					<div className="form-group">
                        <label>Rental Price: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeRental}
                            />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Car" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }

}