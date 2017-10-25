var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://localhost/ask')
db.on('error',console.error.bind(console,'连接错误:'));
    db.once('open',function(){
      //一次打开记录
      console.log('ok')
    });
//var catp = new mongoose.Schema(
//	{name:String}
//);
//var catm = db.model('kimi',catp)
////var catm = db.model('kimi')
//var cate = new catm({name:"li"})
//cate.save();
//catm.find({name:"lijie"},function (err,k){
//	console.log(k)
//})
module.exports = db