var mongoose = require('mongoose');

module.exports = mongoose.model('Type',{
    id: String,
    name: String,
    type: String,
    ability: String
})