var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var orgtoregionSchema = new Schema({	'org' : {	 	type: Schema.Types.ObjectId,	 	ref: 'org'	},	'region' : {	 	type: Schema.Types.ObjectId,	 	ref: 'region'	}});

module.exports = mongoose.model('orgtoregion', orgtoregionSchema);
