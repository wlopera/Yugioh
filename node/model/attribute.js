var mongoose = require('mongoose');

module.exports = mongoose.model('Attribute',{
    id: String,
    name: String,
    icon: String
})