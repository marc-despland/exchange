const express = require('express');
//var bodyParser = require('body-parser');
var database = {};
const app = express()
//app.use( bodyParser.json() );
app.get('*', function (req, res) {
	res.send(database[req.url]);
});
app.put('*', function (req, res) {
	var data = "";
	req.on('data', function(chunk) {
		data+=chunk;
	});
	req.on('end', function() {
		database[req.url]=data;
		res.send("OK");
	});	
});
app.post('*', function (req, res) {
	var data = "";
	req.on('data', function(chunk) {
		data+=chunk;
	});
	req.on('end', function() {
		database[req.url]=data;
		res.send("OK");
	});	
});
app.delete('*', function (req, res) {
	delete database[req.url];
	res.send("OK");
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})