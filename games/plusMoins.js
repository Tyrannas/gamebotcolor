var plusMoins = {};

plusMoins.begin = function(user){
	user.preferences.plusMoins = {};
	user.preferences.plusMoins.count = 0;
	user.preferences.plusMoins.number = Math.floor(Math.random()*1000);
	user.preferences.game = 'plusMoins';
	facebook.sendQuickMessage("Ok j'ai choisi un nombre entre 1 et 1000! A toi de jouer", user.id);
};

plusMoins.parse = function(message,user){
	var i = parseInt(message);
	if(isNaN(i))
		return "Il faut rentrer un chiffre!!";
	if(i < user.preferences.plusMoins.number){
		user.preferences.plusMoins.count++;
		return "Trop petit!";
	}
	else if(i > user.preferences.plusMoins.number){
		user.preferences.plusMoins.count++;
		return "Trop grand!";
	}
	else {
		if(user.preferences.plusMoins.highScore <= user.preferences.plusMoins.count)
			return "Bien joué. Tu as trouvé en " + user.preferences.plusMoins.count + "coups! Ton reccord est à " + user.preferences.plusMoins.highScore + ".Tu peux utiliser le menu pour rejouer ou changer de jeu!";
		else{
			user.preferences.plusMoins.highScore = user.preferences.plusMoins.count;
			return "Bien joué. Tu as trouvé en " + user.preferences.plusMoins.count + "coups! C'est un nouveau record!";
		}
	}
};

module.exports = plusMoins;
