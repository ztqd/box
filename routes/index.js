var express = require('express');
var router = express.Router();

var Box = require('./schema');
var fs = require('fs');

router.get('/', function (req, res, next) {
  Box.find({type:'con'},function (err, data) {
  	res.render('index', {
  			title: '意见箱',
       	vacs: data
      });
  })
  .sort({'time':-1});
});
router.post('/', function(req, res, next) {
	var date = new Date();
			var mon = date.getMonth() + 1, 
			 ho = date.getHours(), 
			 min = date.getMinutes(),
			 sec = date.getSeconds();
			mon1 = addZero(mon);
			ho1 = addZero(ho);
			min1 = addZero(min);
			var a = date.getFullYear() + '-' + mon1 + '-' + date.getDate() + ' ' +
							ho1 + ':' + min1;
			var doc = {contant: req.body.contant,type:'con',time:a};
			// var doc = {contant: html_encode(req.body.contant),type:'con',time:a};
			Box.create(doc, function(error){
		    if(error){
	        console.log(error);
		    }else{
	        console.log('save ok');
	        res.redirect('/');
		    }
		  });
});
function html_encode(str) { //将用户输入的特殊字符进行转义
	var s = ""; 
	if (str.length == 0) return ""; 
	s = str.replace(/&/g, "&gt;"); 
	s = s.replace(/</g, "&lt;"); 
	s = s.replace(/>/g, "&gt;"); 
	s = s.replace(/ /g, "&nbsp;"); 
	s = s.replace(/\'/g, "&#39;"); 
	s = s.replace(/\"/g, "&quot;"); 
	s = s.replace(/\n/g, "<br>"); 
	return s; 
}

function addZero(obj){
  return obj.toString().length <= 1?'0' + obj:obj;
}
module.exports = router;
