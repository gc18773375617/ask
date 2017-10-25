let mongoose = require('mongoose')
let liuyan = new mongoose.Schema(
	{
		username:String,
		liuyan:String,
		date:String
	}
)
module.exports = liuyan