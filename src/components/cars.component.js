import React, { Component } from 'react';
import axios from 'axios';
import './page.css';
import EditCar from './edit_car.component';

const Car = props => (
	<tr>
		<td className="img-container"><img className="picture" src={props.car.picture} alt="" /></td>
		<td><span>{props.car.make}</span></td>
        <td><span>{props.car.model}</span></td>
        <td><span>{props.car.seats}</span></td>
		<td><span>{props.car.type}</span></td>
        <td><span>{props.car.rental_price}</span></td>
        <td><button className="button-del" onClick={() => { props.deleteCar(props.car._id) }}>delete</button></td>
	</tr>
)

export default class CarsList extends Component {
    constructor(props){
        super(props);

        this.deleteCar = this.deleteCar.bind(this);
        this.state = {cars: [], editting: false};

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

    deleteCar(id) {
        axios.delete('http://localhost:5000/cars/'+id)
            .then(res => console.log(res.data));

        this.setState({
            cars: this.state.cars.filter(el => el._id !== id)
        })
    }   
    
    carList() {
        return this.state.cars.map(currentcar => { 
            return <Car car={currentcar} deleteCar={this.deleteCar} key={currentcar._id}/>; 
        })
    }

    
    render(){
        
        let connected;
        if(this.state.cars.length < 1){
           connected = <h1>Backend spinning up....please wait a few seconds</h1>;
        }

        
        return(
                <div> 
                    <div>
                        {connected}
                    </div>
                    <table className="table table-striped table-dark">
                    <thead className="table table-bordered table-light">
                            <tr>
                                <th>Picture</th>
                                <th>Make</th>
                                <th>Model</th>
                                <th>Seats</th>
                                <th>Type</th>
                                <th>Rental Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        
                        <tbody className="tbody">
                            { this.carList() }
                        </tbody>
                    </table>
                    <div>
                        <button onClick={() => this.state.editting ? this.setState ({editting: false})  : this.setState ({editting: true}) }>Edit Entry</button><button>Delete Entry</button>
                        {this.state.editting ? <EditCar /> : null}
                    </div>    
                </div>
		)
	}
}