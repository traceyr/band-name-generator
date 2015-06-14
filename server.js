'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app/'));

var Adjective = function() {
	this.weary = true;
	this.vengeful = true;
	this.sophisticated = true;
	this.yellowish = true;
	this.bogus = true;
}

var adjective = new Adjective();

var Verb = function(){
this.awake = true;
this.beaten = true;
this.hidden = true;
this.meant = true;
this.said = true;
}

var verb = new Verb();

var Noun = function(){
	this.veil = true;
	this.rose = true;
	this.vein = true;
	this.linen = true;
	this.creature = true;
}

var noun = new Noun();

function getRandomWord(object) {
	var propArray = Object.keys(object);
	var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
	return {word: randomProp};
}

app.get('/', function(req, res) {
	res.sendFile('index.html');
});

app.get('/adjective', function(req, res) {
	res.json(getRandomWord(adjective));
});

app.get('/verb', function(req, res) {
	res.json(getRandomWord(verb));
});

app.get('/noun', function(req, res) {
	res.json(getRandomWord(noun));
});

app.listen(port, function() {
	console.log("server available at http://localhost:" + port);
});
