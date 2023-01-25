const router = require('express').Router();
let Car = require('../models/car.model');

router.route('/').get((req, res) => {    //route to GET data from database push to front end
    Car.find()
    .then(apps=> res.json(apps))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => { //route to add a car 
    const picture = req.body.picture;
	const make = req.body.make;
	const model = req.body.model;
    const seats = req.body.seats;
	const type = req.body.type;
    const rental_price = req.body.rental_price;
	
	

    const newCar = new Car({  //creates the car using the attibutes from user input
		picture,
		make, 
		model,
        seats,
		type,
        rental_price
	});
    
    newCar.save()                   //saves the car to the database
        .then(() => res.json('Car added!'))
        .catch(err => res.status(400).json('Error: ' + err));
		
});

router.route('/:id').get((req, res) => {
    Car.findById(req.params.id)
        .then(car => res.json(car))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => { //deletes the car from the database
    Car.findByIdAndDelete(req.params.id)
    .then(() => res.json('Car deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => { //updates a car in the data base
    Car.findById(req.params.id)
        .then(car => {
			car.picture = req.body.picture
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