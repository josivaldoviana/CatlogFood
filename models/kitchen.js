const mongoose = require('mongoose')

const kitchenSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Kitchen', kitchenSchema)