//Dependencies 
const express = require('express');
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser');

//MongoDB
mongoose.connect('mongodb://127.0.0.1/task-service'); 

//Get the default connection
const db = mongoose.connection; 
//handle and errors with connecting to the database
db.on('error', console.error.bind(console, 'MongoDB conncetion error'));

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); 

// Routes 
app.use('/api', require('./routes/api'));

//Start the server
app.listen(3000);

console.log('API is running on port 3000'); 