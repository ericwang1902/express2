var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var regionSchema = new Schema({	'code' : String,	'province' : String,	'city' : String,	'county' : String,	'district' : String});

module.exports = mongoose.model('region', regionSchema);
