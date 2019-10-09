var mongoose = require('mongoose');

module.exports = mongoose.model('Card',{
    number: String,
    nombre: String,
    name: String,
    level: String,
    attribute: String,
    icon: String,
    type: String,
    ATK: String,
    DEF: String,
    description: String
})