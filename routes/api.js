//Dependencies
const express = require ('express'); 
const router = express.Router(); 

//Models 
const Task = require('../models/task'); 
//Routes 
Task.methods(['get', 'put', 'post', 'delete']);
Task.register(router, '/tasks'); 

//Return router
module.exports = router; 