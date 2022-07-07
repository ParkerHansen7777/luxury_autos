const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();                  /* creates Express server */
const port = process.env.PORT || 5000;  /* port */

app.use(cors());                        /* cors middleware */
app.use(express.json());                /* help to parse JSON */

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const carsRouter = require('./routes/cars');


app.use('/cars', carsRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});