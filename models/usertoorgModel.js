var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var usertoorgSchema = new Schema({

module.exports = mongoose.model('usertoorg', usertoorgSchema);