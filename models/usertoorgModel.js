var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var usertoorgSchema = new Schema({	'userid' : {	 	type: Schema.Types.ObjectId,	 	ref: 'user'	},	'orgid' : {	 	type: Schema.Types.ObjectId,	 	ref: 'org'	}});

module.exports = mongoose.model('usertoorg', usertoorgSchema);
