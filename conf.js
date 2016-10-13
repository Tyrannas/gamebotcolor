var conf = require("./bottomatik/configurator.js");

var menus = [];

menus.push(new conf.CTA('PlusOuMoins','postback','game.begin'));
menus.push(new conf.CTA('Piccolo','postback','game.begin'));
menus.push(new conf.CTA('Devinettes','postback','game.begin'));

conf.setPersistentMenu(menus);
conf.setGetStarted('getStarted');