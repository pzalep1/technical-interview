//Dependencies
const mongoose = require('mongoose'); 

//Declarations 
const Schema = mongoose.Schema; 
//Schema 
const taskSchema = new Schema({
    text: String,
    completed: Boolean
}); 
//Compile model from the schema above 
const taskModel = mongoose.model('Tasks', taskSchema); 