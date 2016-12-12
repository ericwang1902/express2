var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = new Schema({	'username' : String,	'psd' : String,	'openid' : String,	'roleArray' : Array,	'reccode' : String,	'recuser' : {	 	type: Schema.Types.ObjectId,	 	ref: 'user'	},	'deforg' : {	 	type: Schema.Types.ObjectId,	 	ref: 'org'	},	'defsend' : {	 	type: Schema.Types.ObjectId,	 	ref: 'address'	}});

module.exports = mongoose.model('user', userSchema);
