var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var authoritySchema = new Schema({

module.exports = mongoose.model('authority', authoritySchema);