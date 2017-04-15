var express = require('express');
var router = express.Router();

var Box = require('./schema');
var fs = require('fs');
/* GET home page. */
// router.get('/', function (req, res, next) {
//   Box.find(function (err, data) {
//   	res.render('index', {
//   				title: '意见箱',
//           vacs: data
//       });
//   });
// });

router.get('/', function (req, res, next) {
  Box.find({type:'article'},function (err, data) {
  	res.render('index', {
  		title: '意见箱',
          vacs: data
      });
  });
});

module.exports = router;
