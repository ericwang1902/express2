var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var kdnorderSchema = new Schema({

module.exports = mongoose.model('kdnorder', kdnorderSchema);