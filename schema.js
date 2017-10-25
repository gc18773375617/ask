let mongoose = require('mongoose')
let user = new mongoose.Schema (
	{
		username:String,
		userposs:String,
		userposs2:String
	}
)

module.exports = user