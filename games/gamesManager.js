var plusMoins = require("./plusMoins");

var game = {};

game.begin = function(user, type){
	switch(type){
		case 'plusMoins':
			plusMoins.begin(user);
	}
};

game.parse = function(message, user, type){
	console.log(type);
	switch(type){
		case 'plusMoins':
			return plusMoins.parse(message,user);
	}
};

module.exports = game;
