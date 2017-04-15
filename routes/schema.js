var mongoose = require("mongoose");
var boxSch = mongoose.Schema({
	type: String,
	contant: String,
	year:String
});
var Box = mongoose.model("box", boxSch);
module.exports = Box;

// var mongoose = require("mongoose");
// var vacationSchema = mongoose.Schema({
// 	name: String,
// 	password:String,
// 	title:String,
// 	contant:String,
// 	type:String,
// 	year:String
// });
// var Vacation = mongoose.model("vacations",vacationSchema);
// module.exports = Vacation;


