var conf = require("./bottomatik/configurator.js");

var menus = [];
menus.push(new conf.CTA('PlusOuMoins','postback','game.begin'));
conf.setPersistentMenu(menus);
conf.setGetStarted('getStarted');