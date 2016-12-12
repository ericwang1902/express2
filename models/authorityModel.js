var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var authoritySchema = new Schema({	'code' : String,	'name' : String,	'description' : String});

module.exports = mongoose.model('authority', authoritySchema);
