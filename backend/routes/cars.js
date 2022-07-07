const router = require('express').Router();
let Car = require('../models/car.model');

router.route('/').get((req, res) => {
    Car.find()
    .then(apps=> res.json(apps))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const make = req.body.make;
	const model = req.body.model;
    const seats = req.body.seats;
	const type = req.body.type;
    const rental_price = req.body.rental_price;
	
	

    const newCar = new Car({
		make, 
		model,
        seats,
		type,
        rental_price
	});
    
    newCar.save()
        .then(() => res.json('Car added!'))
        .catch(err => res.status(400).json('Error: ' + err));
		
});

router.route('/:id').get((req, res) => {
    Car.findById(req.params.id)
        .then(car => res.json(car))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Car.findByIdAndDelete(req.params.id)
    .then(() => res.json('Car deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Car.findById(req.params.id)
        .then(car => {
            car.make = req.body.make;
            car.model = req.body.model;
            car.seats = req.body.seats;
			car.type = req.body.type;
            car.rental_price = req.body.rental_price;
            
            car.save()
                .then(() => res.json('Car updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;