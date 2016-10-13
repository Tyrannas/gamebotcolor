var plusMoins = require("./plusMoins");

var game = {}

game.begin = function(user, type){
	switch(type){
		case 'plusMoins':
			plusMoins.begin();
	}
}

game.parse = function(message, user, type){
	switch(type){
		case 'plusMoins':
			plusMoins.parse(message,user);
	}
}

module.exports = game;