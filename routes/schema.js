var mongoose = require("mongoose");
var boxSch = mongoose.Schema({
	type: String,
	contant: String,
	time:String
});
var Box = mongoose.model("boxs", boxSch);
module.exports = Box;

