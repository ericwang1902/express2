var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var regionSchema = new Schema({

module.exports = mongoose.model('region', regionSchema);