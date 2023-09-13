var mongoose = require('mongoose')
var lockSchema = new mongoose.Schema({
	name: String,
	id: String,
	b_id:{
		type: String,
		default: "BOLT8023881",
	}
	key:{
		type: String,
		default: "a8bdbe7f-23c7-4339-b44b-c61589b16",
	} ,
	pin: { 
		type: number,
		default: 0,
	}
	location: String
	
}),

module.exports = mongoose.model('Lock',lockSchema)
