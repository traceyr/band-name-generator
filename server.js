'use strict';

var express = require('express');
var bodyparser = require("body-parser");
var Adjective = require('./lib/adjectives.js');
var Noun = require('.lib/noun.js');
var getRandomWord = require('./lib/getRandomWord.js');
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/app/'));

var adjective = new Adjective();

//move verb and noun objects to new seperate viles and creat vars and requre them in
var Verb = function(){
this.awake = true;
this.beaten = true;
this.hidden = true;
this.meant = true;
this.said = true;
};

var verb = new Verb();

// var Noun = function(){
// 	this.veil = true;
// 	this.rose = true;
// 	this.vein = true;
// 	this.linen = true;
// 	this.creature = true;
// 	this.rain = true;
// 	this.battleStar = true;
// }

var noun = new Noun();

// function getRandomWord(object) {
//   var propArray = Object.keys(object);
//   var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
//   return {word: randomProp};
// };

//move postRandomWords to another file and create a var require

function postRandomWord (word, object) {
	//if the word doesnt exist
	//if the word does exist

	//check if the word exists
	if (object.hasOwnProperty(word)) {
		return{msg: "This word is already in existense within our generator. Please try again."}
	} else {
		object[word] = true;
		return {msg: "Thanks for the new word " + word + ". It has been added to the generator"}
	}

	//if the word doesnt exist, add it as a property to that object
	//and send msg back thanking for word
	//if the word does exist, send msg back
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

app.post('/adjective', function(req, res) {
	var word = postRandomWord(req.body.word, adjective);
	res.json(word);
});

app.post('/noun', function(req, res) {
	var word = postRandomWord(req.body.word, noun);
	res.json(word);
});

app.post('/verb', function(req, res) {
	var word = postRandomWord(req.body.word, verb);
	res.json(word);
});

app.listen(port, function() {
	console.log("server available at http://localhost:" + port);
});
