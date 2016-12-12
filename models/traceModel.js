var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var traceSchema = new Schema({	'accepttime' : Date,	'acceptstation' : String,	'description' : String});

module.exports = mongoose.model('trace', traceSchema);
