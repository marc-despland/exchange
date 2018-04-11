const express = require('express');
//var bodyParser = require('body-parser');
var database = {};
const app = express()
//app.use( bodyParser.json() );
app.get('*', function (req, res) {
	if ((req.headers.appkey === undefined) || (req.headers.appkey !="absimiliard")) {
		res.status(403);
		res.send();
	} else {
		res.send(database[req.url]);
	}
});
app.put('*', function (req, res) {
	if ((req.headers.appkey === undefined) || (req.headers.appkey !="absimiliard")) {
		res.status(403);
		res.send();
	} else {
		var data = "";
		req.on('data', function(chunk) {
			data+=chunk;
		});
		req.on('end', function() {
			database[req.url]=data;
			res.send("OK");
		});
	}
});
app.post('*', function (req, res) {
	if ((req.headers.appkey === undefined) || (req.headers.appkey !="absimiliard")) {
		res.status(403);
		res.send();
	} else {
		var data = "";
		req.on('data', function(chunk) {
			data+=chunk;
		});
		req.on('end', function() {
			database[req.url]=data;
			res.send("OK");
		});
	}
});
app.delete('*', function (req, res) {
	if ((req.headers.appkey === undefined) || (req.headers.appkey !="absimiliard")) {
		res.status(403);
		res.send();
	} else {
		delete database[req.url];
		res.send("OK");
	}
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})