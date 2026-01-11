const mongoose = require('mongoose')

const studentsSchema = new mongoose.Schema({
    name:String,
    roll:String,
    department:String,
    email:String,
},{timestamps: true});

module.exports=moongse.model('Student,studentSchema');