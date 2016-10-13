var bot = require("./bottomatik/app.js");

Handlers.on('text', (message,user,session) => {
	var reponse = parse(message,user);
	facebook.sendQuickMessage(reponse, user.id);
});

Handlers.on('postback', (attachment, user,session) => {
	switch(attachment.payload){
		case 'PlusOuMoins':
			game.begin(user,'plusMoins');
		case 'getStarted':
			facebook.sendQuickMessage("Bienvenue! Une petite envie de jouer? Tu peux choisir ton jeu avec le menu ci-dessous", user.id);
	}
});

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

plusMoins.begin = function(user){
	user.preferences.number = Math.floor(Math.random()*1000);
	user.preferences.game = 'plusMoins';
	facebook.sendQuickMessage("Ok j'ai choisi un nombre! A toi de jouer", user.id);
}

var plusMoins = {}

plusMoins.parse = function(message,user){
	var i = parseInt(message);
	if(isNaN(i))
		return "Il faut rentrer un chiffre!!";
	if(i < user.preferences.number)
		return "Trop petit!";
	else if(i > user.preferences.number)
		return "Trop grand!";
	else 
		return "Bien ouej.";
}

bot.db.load();
bot.start(3880);