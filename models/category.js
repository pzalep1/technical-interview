//Dependencies
const restful = require('node-restful'); 
const mongoose = restful.mongoose; 

//Schema 
const categorySchema = new mongoose.Schema({
    "text": String,
    "completed": Boolean
}); 
//Return model
module.exports = restful.model('Tasks', taskSchema);