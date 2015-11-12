var express = require("express");
var app = express();

var messages = ["Hello there.", "I'm sorry, I cannot take any requests at this time.", "I can tell you how to do that."];

var getRandomMessage = function(message) {
	var randomNum = Math.floor(Math.random()*messages.length);
	return messages[randomNum];
}

app.get("/", function(req, res) {
	res.send(JSON.stringify({
		message: getRandomMessage()
	}));
});

app.listen(8887, function() {
	console.log("listening on port 8887");
});