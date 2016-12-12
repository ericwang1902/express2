var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var roleSchema = new Schema({	'code' : String,	'name' : String,	'description' : String,	'authArray' : Array});

module.exports = mongoose.model('role', roleSchema);
