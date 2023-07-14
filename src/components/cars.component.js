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
        this.setPassword= this.setPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {cars: [], password: '', employee: false, adding: false, editting: false, deleting: false, iD: ''};s

    }

    componentDidMount() {
        axios.get('https://cardealer-backend-ixph.onrender.com/cars/')
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
        
        id.preventDefault()
        axios.delete('https://cardealer-backend-ixph.onrender.com/cars/'+this.state.iD)

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

    setPassword(e){
        this.setState({
            password: e.target.value
        });
    }
    
    
    onSubmit(e){
        e.preventDefault();
        
        if(this.state.password === 'admin') { this.setState({
            employee: true
        }) }
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
                    {this.state.employee ?
                    <div>
                        <h3 className="form-heading">Employee Menu</h3>  
                        <button onClick={() => this.state.adding ? this.setState ({adding: false})  : this.setState ({adding: true, editting: false, deleting: false}) }>Add Entry</button>
                        <button onClick={() => this.state.editting ? this.setState ({editting: false})  : this.setState ({editting: true, adding: false, deleting: false}) }>Edit Entry</button>
                        <button onClick={() => this.state.deleting ? this.setState ({deleting: false}) : this.setState({deleting: true, adding: false, editting: false})}>Delete Entry</button>
                        <button onClick={() => this.setState({password: '', employee: false})}>Logout</button>
                        <div>    
                            {this.state.adding ? <NewCar /> : null}
                            {this.state.editting ? <EditCar /> : null}
                            {this.state.deleting ? 
                                <div className="container">
                                     <h3 className="form-heading">Delete Car entry</h3>
                                    <form onSubmit={this.deleteCar}> 
                                        <div className="form-group">
                                            <label className="form-label">Car: </label>
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
                                </div>
                                : null}
                        </div>  
                        </div> : <div className="container">
                                    <h3 className="form-heading">Employee login</h3>
                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-group">
                                            <input type="password"
                                                className="form-control"
                                                placeholder='enter employee password, to try out type in &apos;admin&apos; without quotes and hit enter'
                                                onChange={this.setPassword}
                                                />
                                        </div>
                                    </form>
                                </div> }    
        
                </div>
		)
	}
}