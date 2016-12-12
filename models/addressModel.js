var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var addressSchema = new Schema({	'region' : {	 	type: Schema.Types.ObjectId,	 	ref: 'region'	},	'detailAdd' : String,	'phone' : String});

module.exports = mongoose.model('address', addressSchema);
