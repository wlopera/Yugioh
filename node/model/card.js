var mongoose = require('mongoose');

module.exports = mongoose.model('Card', {
    nombre: String,
    name: String,
    level: String,
    attribute: {
        _id: String,
        name: String,
        icon: String
    },
    icon: String,
    type: String,
    ATK: String,
    DEF: String,
    description: String
})