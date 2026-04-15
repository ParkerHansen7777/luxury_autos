import React, { useState } from 'react';
import axios from 'axios';

export default function NewCar({ onAdded }) {
    const [picture, setPicture] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [seats, setSeats] = useState('');
    const [type, setType] = useState('');

    const hostname = process.env.REACT_APP_BACKEND_HOSTNAME || 'localhost';
    const port = process.env.REACT_APP_BACKEND_PORT || 5000;
    const baseURL = `${hostname}:${port}`;

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

        axios.post(`${baseURL}/cars/add`, car)
            .then((res) => {
                console.log(res.data);
                if (onAdded) {
                    onAdded();
                }
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="container">
            <h3 className="form-heading">Add New Car entry</h3>
            <form onSubmit={onSubmit}>
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
                    <input type="submit" value="Create Entry" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}
