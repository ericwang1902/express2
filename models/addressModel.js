var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var addressSchema = new Schema({

module.exports = mongoose.model('address', addressSchema);