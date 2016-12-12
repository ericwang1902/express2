var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var platorderSchema = new Schema({
	'ordernum' : String,
	'ordertime' : Date,
	'picktime' : Date,
	'updatetime' : Date,
	'pickorg' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'org'
	},
	'picker' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'user'
	},
	'kdnorderid' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'kdnorder'
	},
	'trace' : Array
});

module.exports = mongoose.model('platorder', platorderSchema);
