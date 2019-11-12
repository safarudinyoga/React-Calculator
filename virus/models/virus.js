const mongoose = require('mongoose')

var todoSchema = new mongoose.Schema({
    nama: String
})

module.exports = mongoose.model('Virus', todoSchema)