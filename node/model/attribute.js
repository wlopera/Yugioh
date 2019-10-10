var mongoose = require('mongoose');

module.exports = mongoose.model('Attribute',{
    name: String,
    icon: String
})