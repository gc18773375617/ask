let mongoose = require('mongoose')
let user = new mongoose.Schema (
	{
		username:String,
		userposs:String
	}
)

module.exports = user