const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carSchema = new Schema({
    make: {
        type: String,
        required: true,
        trim: true
        
    },
	model: {
        type: String,
        required: true,
        trim: true
        
    },
    seats: {
        type: String,
        required: true,
        trim: true
    },
	type: {
        type: String,
        required: true,
        trim: true
    },
	rental_price: {
        type: String,
        required: true,
        trim: true
    },
}, {
    timestamps: true,
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;