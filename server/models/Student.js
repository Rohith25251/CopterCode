const mongoose = require('mongoose')

const studentsSchema = new mongoose.Schema({
    name:String,
    roll:String,
    department:String,
    email:String,
},{timestamps: true});

module.exports=mongoose.model('Student',studentsSchema);