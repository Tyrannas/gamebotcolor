var plusMoins = {}

plusMoins.begin = function(user){
	user.preferences.number = Math.floor(Math.random()*1000);
	user.preferences.game = 'plusMoins';
	facebook.sendQuickMessage("Ok j'ai choisi un nombre! A toi de jouer", user.id);
}

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

module.exports = plusMoins;