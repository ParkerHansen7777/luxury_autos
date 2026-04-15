import { useEffect, useState } from 'react';
import axios from 'axios';

export default function EditCar({ onEdited }) {
    const [cars, setCars] = useState([]);
    const [iD, setID] = useState('');
    const [picture, setPicture] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [seats, setSeats] = useState('');
    const [type, setType] = useState('');
    
    const baseURL = process.env.REACT_APP_BACKEND_HOSTNAME || 'localhost';

    useEffect(() => {
        axios.get(`${baseURL}/cars/`)
            .then((response) => setCars(response.data))
            .catch((error) => console.log(error));
    }, [baseURL]);

    const onChangeID = (e) => {
        const selectedId = e.target.value;
        setID(selectedId);

        if (!selectedId) {
            setPicture('');
            setMake('');
            setModel('');
            setSeats('');
            setType('');
            return;
        }

        axios.get(`${baseURL}/cars/${selectedId}`)
            .then((response) => {
                const car = response.data;
                setPicture(car.picture || '');
                setMake(car.make || '');
                setModel(car.model || '');
                setSeats(car.seats || '');
                setType(car.type || '');
            })
            .catch((error) => console.log(error));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const car = {
            picture,
            make,
            model,
            seats,
            type,
        };

        console.log(car);

        axios.post(`${baseURL}/cars/update/${iD}`, car)
            .then((res) => {
                console.log(res.data);
                if (onEdited) {
                    onEdited();
                }
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="container">
            <h3 className="form-heading">Edit Car entry</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label className="form-label">Car: </label>
                    <select
                        required
                        className="form-control"
                        value={iD}
                        onChange={onChangeID}
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
                    <label className="form-label">Picture: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={picture}
                        onChange={(e) => setPicture(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Make: </label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        value={make}
                        onChange={(e) => setMake(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Model: </label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Seats: </label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        value={seats}
                        onChange={(e) => setSeats(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Type: </label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Edit Entry" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}
