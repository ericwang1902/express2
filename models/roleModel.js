var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var roleSchema = new Schema({

module.exports = mongoose.model('role', roleSchema);