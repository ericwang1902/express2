var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var orgtoregionSchema = new Schema({

module.exports = mongoose.model('orgtoregion', orgtoregionSchema);