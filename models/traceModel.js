var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var traceSchema = new Schema({

module.exports = mongoose.model('trace', traceSchema);