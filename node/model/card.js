var mongoose = require('mongoose');

module.exports = mongoose.model('Card', {
    nombre: String,
    name: String,
    level: String,
    attribute: String,
    image: String,
    type: String,
    ATK: String,
    DEF: String,
    description: String,
    character: String
})