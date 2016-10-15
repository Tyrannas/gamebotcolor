var bot = require("./bottomatik/app.js");
var game = require("./games/gamesManager");

Handlers.on('text', (message,user,session) => {
	if(user.preferences.game === undefined)
		facebook.sendQuickMessage("Il faut choisir un jeu!", user.id);
	var reponse = game.parse(message,user,user.preferences.game);
	facebook.sendQuickMessage(reponse, user.id);
});

Handlers.on('postback', (attachment, user,session) => {
	switch(attachment.payload){
		case 'PlusOuMoins':
			game.begin(user,'plusMoins');
		case 'enigme':
			game.begin(user,'enigme');
		case 'getStarted':
			facebook.sendQuickMessage("Bienvenue! Une petite envie de jouer? Tu peux choisir ton jeu avec le menu ci-dessous", user.id);
		break;
	}
});


bot.db.load();
bot.start(3880);
