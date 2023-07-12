import React, { Component } from 'react';
import axios from 'axios';

export default class EditCar extends Component {
    constructor(props) {
            super(props);
            
            this.onChangePicture = this.onChangePicture.bind(this);
            this.onChangeMake = this.onChangeMake.bind(this);
            this.onChangeModel = this.onChangeModel.bind(this);
            this.onChangeSeats = this.onChangeSeats.bind(this);
            this.onChangeType = this.onChangeType.bind(this);
            this.onChangeiD = this.onChangeiD.bind(this);
            this.onSubmit = this.onSubmit.bind(this);

            this.state = {
                cars: [],
                iD: '',
                picture: '',
                make: '',
                model: '',
                seats: '',
                type: ''
            }
        }

        componentDidMount() {
            axios.get('http://localhost:5000/cars/')
                .then(response => {
                        this.setState({ cars: response.data })
                })
                
                .catch((error) => {
                    console.log(error);
                })

           
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
        
        onChangeiD(e){
            
            console.log('Logging: ' + e.target.value)
            axios.get('http://localhost:5000/cars/'+e.target.value)
            .then(response => {
                console.log('logging: ' + response.data.picture)
                this.setState({
                    iD: e.target.value,
                    picture: response.data.picture,
                    make: response.data.make,
                    model: response.data.model,
                    seats: response.data.seats,
                    type: response.data.type, 
                });   
            })
            .catch(function (error) {
                console.log(error);
            })
            
        }
        
        onSubmit(e) {
            e.preventDefault();

            const car = {
                picture: this.state.picture,
                make: this.state.make,
                model: this.state.model,
                seats: this.state.seats,
                type: this.state.type,
            }

            console.log(car);

            axios.post('http://localhost:5000/cars/update/'+this.state.iD, car)
                .then(res => console.log(res.data));
        
        window.location = '/';
                
        }

        render(){
            return(
                
                <div className="Page">
                    <div className="Page-body">
                        <h3 className="form-heading">Edit Car entry</h3>
                        <form onSubmit={this.onSubmit}> 
                        <div className="form-group">
                            <label className="form-label">Car: </label>
                            <select ref="userInput"
                                required
                                className="form-control"
                                onChange={this.onChangeiD}>
                                    <option value=''></option>
                                {
                                    this.state.cars.map(car => {
                                        return <option
                                        key={car._id}
                                        value={car._id}>{car.make + ' ' + car.model}
                                        </option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Picture: </label>
                            <input type="text"
                                
                                className="form-control"
                                value={this.state.picture}
                                onChange={this.onChangePicture}
                                />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Make: </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.make}
                                onChange={this.onChangeMake}
                                />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Model: </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.model}
                                onChange={this.onChangeModel}
                                />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Seats: </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.seats}
                                onChange={this.onChangeSeats}
                                />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Type: </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.type}
                                onChange={this.onChangeType}
                                />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Submit Changes" className="btn btn-primary" />
                        </div>
                        </form>
                    </div>    
                </div>
                
            )
        }
}