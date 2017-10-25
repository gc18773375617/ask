var express = require('express');
var router = express.Router();
var db = require('./../connect')
var mongoose = require('mongoose')
var user = require('./../schema')
var userm = db.model('user',user)
var liuyan = require('./../schema2')
var liuyanm = db.model('liuyan',liuyan)
var date = require('silly-datetime')
var time = date.format(new Date(),'YYYY-MM-DD HH:mm')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/register',function(req,res,next) {
	res.render('register',{title:'注册'})
})
router.get('/login',function(req,res,next) {
	res.render('login',{title:'登录'})
})
router.post('/user',function (req,res,next) {
	userm.find({username:req.body.username},function (err,rb) {
		if (rb.length == 1) {
			res.render('register',{title:"用户名已存在"})
			return;
		}
		var usersave = new userm({
		username:req.body.username,
		userposs:req.body.userposs
	})
	usersave.save();
	res.render('register',{title:"注册成功"})
	})
})
router.post('/userlogin',function (req,res,next) {
	userm.find({username:req.body.username},function (err,rb) {
		if (rb.length == 1) {
			userm.find({userposs:req.body.userposs,username:req.body.username},function (err,rb) {
				if (rb.length == 1) {
					res.render('liuyan',{username:req.body.username,title:'留言板'})
				}else{
					res.render('login',{title:'密码错误'})
				}
			})
		}else{
			res.render('login',{title:'用户名错误'})
		}
	})
})
router.post('/liuyan',function (req,res,next) {
	console.log(time)
	console.log(req.body.liuyan)
	var liuyansave = new liuyanm (
		{
			username:req.body.username,
			date:time,
			liuyan:req.body.liuyan
		}
	)
	liuyansave.save();
		res.end()
})
module.exports = router;
