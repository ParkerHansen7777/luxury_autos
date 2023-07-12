import React, { Component } from 'react';
import axios from 'axios';
import './page.css';
import EditCar from './edit_car.component';
import NewCar from './new_car.component'

const Car = props => (
	<tr>
		<td className="img-container"><img className="picture" src={props.car.picture} alt="" /></td>
		<td><span>{props.car.make}</span></td>
        <td><span>{props.car.model}</span></td>
        <td><span>{props.car.seats}</span></td>
		<td><span>{props.car.type}</span></td>
	</tr>
)

export default class CarsList extends Component {
    constructor(props){
        super(props);

        this.deleteCar = this.deleteCar.bind(this);
        this.setID = this.setID.bind(this);
        this.state = {cars: [], adding: false, editting: false, deleting: false, iD: ''};

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

    setID(e){
        this.setState({
            iD: e.target.value
        });
    }
    
    deleteCar(id) {
       
        id.preventDefault();
        axios.delete('http://localhost:5000/cars/'+this.state.iD)
            .then(res => console.log(res.data));

        this.setState({
            cars: this.state.cars.filter(el => el._id !== id)
        })

        window.location = '/';
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
                            </tr>
                        </thead>
                        
                        <tbody className="tbody">
                            { this.carList() }
                        </tbody>
                    </table>
                    <div>
                        <button onClick={() => this.state.adding ? this.setState ({adding: false})  : this.setState ({adding: true}) }>Add Entry</button>
                        <button onClick={() => this.state.editting ? this.setState ({editting: false})  : this.setState ({editting: true}) }>Edit Entry</button>
                        <button onClick={() => this.state.deleting ? this.setState ({deleting: false}) : this.setState({deleting: true})}>Delete Entry</button>
                        {this.state.adding ? <NewCar /> : null}
                        {this.state.editting ? <EditCar /> : null}
                        {this.state.deleting ? 
                            <form onSubmit={this.deleteCar}> 
                                <div className="form-group">
                                    <label>Car: </label>
                                    <select ref="userInput"
                                        required
                                        className="form-control"
                                        onChange={this.setID}
                                        >
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
                                    <input type="submit" value="Delete Entry" className="btn btn-primary" />
                                </div>
                            </form>
                            
                            : null}
                    </div>    
                </div>
		)
	}
}