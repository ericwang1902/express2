var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var orgSchema = new Schema({

module.exports = mongoose.model('org', orgSchema);