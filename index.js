var cors = require('cors');
var fs = require('fs');
var express = require('express');
var app = express();
var pwd = require('/var/www/zichao.co/pwd.js');
//var auth = require('basic-auth');

var port = 4000;

app.listen(port, function(req, res) {
	console.log('alive: ' + port);
});

app.use(cors());

app.get('/', (req, res) => {
	res.redirect('http://zichao.co/simtool/index.html');
});

// audi
app.get('/audi', (req, res) => {
	console.log('Audi requested.');
	var file = '/var/www/zichao.co/public_html/simtool/settings/audi';
	fs.readFile(file, {encoding:'utf-8'}, function(err, data) {
		res.write(data);
		res.end();
	});
});

app.post('/audi_save', basicAuth, (req, res) => {
	var ws = fs.createWriteStream('settings/audi');
	req.on('data', (data) => {
		ws.write(data);
	});
	res.end();
	console.log('Saved to audi');
});

// badm
app.get('/badm', (req, res) => {
	console.log('Badm requested.');
	var file = '/var/www/zichao.co/public_html/simtool/settings/badm';
	fs.readFile(file, {encoding:'utf-8'}, function(err, data) {
		res.write(data);
		res.end();
	});
});

app.post('/badm_save', basicAuth, (req, res) => {
	var ws = fs.createWriteStream('settings/badm');
	req.on('data', (data) => {
		ws.write(data);
	});
	res.end();
	console.log('Saved to badm');
});

// shakes
app.get('/shakes', (req, res) => {
	console.log('Shakes requested.');
	var file = '/var/www/zichao.co/public_html/simtool/settings/shakes';
	fs.readFile(file, {encoding:'utf-8'}, function(err, data) {
		res.write(data);
		res.end();
	});
});

app.post('/shakes_save', basicAuth, (req, res) => {
	var ws = fs.createWriteStream('settings/shakes');
	req.on('data', (data) => {
		ws.write(data);
	});
	res.end();
	console.log('Saved to shakes');
});

// omar
app.get('/omar', (req, res) => {
	console.log('Omar requested.');
	var file = '/var/www/zichao.co/public_html/simtool/settings/omar';
	fs.readFile(file, {encoding:'utf-8'}, function(err, data) {
		res.write(data);
		res.end();
	});
});

app.post('/omar_save', basicAuth, (req, res) => {
	var ws = fs.createWriteStream('settings/omar');
	req.on('data', (data) => {
		ws.write(data);
	});
	res.end();
	console.log('Saved to omar');
});

function basicAuth(req, res, next) {
	var password = req.query.pwd;
	if (!password || password != pwd.pwd()) {
		return res.sendStatus(401);
	}
	next();
}
