var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var orgSchema = new Schema({	'orgname' : String,	'orgcompany' : String,	'orgaccount' : String,	'orgpsd' : String});

module.exports = mongoose.model('org', orgSchema);
