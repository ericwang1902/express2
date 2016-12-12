var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var kdnorderSchema = new Schema({	'ordernum' : String,	'shipcode' : String,	'sendadd' : {	 	type: Schema.Types.ObjectId,	 	ref: 'address'	},	'targetadd' : {	 	type: Schema.Types.ObjectId,	 	ref: 'address'	},	'goodsname' : String});

module.exports = mongoose.model('kdnorder', kdnorderSchema);
