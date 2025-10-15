const mongoose = require('mongoose')

const AdvisorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    specialization:{
        type:String,
        required:true
    },
    description:{
        type: String,
        required: true
    },
    imageurl:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Advisor', AdvisorSchema)
