import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './page.css';
import EditCar from './edit_car.component';
import NewCar from './new_car.component';

const Car = (props) => (
    <tr>
        <td className="img-container"><img className="picture" src={props.car.picture} alt="" /></td>
        <td><span>{props.car.make}</span></td>
        <td><span>{props.car.model}</span></td>
        <td><span>{props.car.seats}</span></td>
        <td><span>{props.car.type}</span></td>
    </tr>
);

export default function CarsList() {
    const [cars, setCars] = useState([]);
    const [password, setPassword] = useState('');
    const [employee, setEmployee] = useState(false);
    const [adding, setAdding] = useState(false);
    const [editting, setEditting] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [iD, setID] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/cars/')
            .then((response) => setCars(response.data))
            .catch((error) => console.log(error));
    }, []);

    const deleteCar = (e) => {
        e.preventDefault();

        if (!iD) {
            return;
        }

        axios.delete(`http://localhost:5000/cars/${iD}`)
            .then((res) => console.log(res.data))
            .finally(() => {
                setCars(cars.filter((el) => el._id !== iD));
                window.location = '/';
            });
    };

    const carList = () => cars.map((currentcar) => (
        <Car car={currentcar} key={currentcar._id} />
    ));

    const onSubmit = (e) => {
        e.preventDefault();
        if (password === 'admin') {
            setEmployee(true);
        }
    };

    const handleToggle = (mode) => {
        setAdding(mode === 'add');
        setEditting(mode === 'edit');
        setDeleting(mode === 'delete');
    };

    let connected;
    if (cars.length < 1) {
        connected = <h1>Backend spinning up....please wait a few seconds</h1>;
    }

    return (
        <div>
            <div>{connected}</div>
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
                    {carList()}
                </tbody>
            </table>
            {employee ? (
                <div>
                    <h3 className="form-heading">Employee Menu</h3>
                    <button onClick={() => handleToggle('add')}>Add Entry</button>
                    <button onClick={() => handleToggle('edit')}>Edit Entry</button>
                    <button onClick={() => handleToggle('delete')}>Delete Entry</button>
                    <button onClick={() => {
                        setPassword('');
                        setEmployee(false);
                    }}>
                        Logout
                    </button>
                    <div>
                        {adding && <NewCar />}
                        {editting && <EditCar />}
                        {deleting && (
                            <div className="container">
                                <h3 className="form-heading">Delete Car entry</h3>
                                <form onSubmit={deleteCar}>
                                    <div className="form-group">
                                        <label className="form-label">Car: </label>
                                        <select
                                            required
                                            className="form-control"
                                            value={iD}
                                            onChange={(e) => setID(e.target.value)}
                                        >
                                            <option value=""></option>
                                            {cars.map((car) => (
                                                <option key={car._id} value={car._id}>
                                                    {car.make + ' ' + car.model}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Delete Entry" className="btn btn-primary" />
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className="container">
                    <h3 className="form-heading">Employee login</h3>
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="enter employee password, to try out type in 'admin' without quotes and hit enter"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}
