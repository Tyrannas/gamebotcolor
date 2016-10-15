var conf = require("./bottomatik/configurator.js");

var menus = [];

menus.push(new conf.CTA('Plus ou moins','postback','PlusOuMoins'));
menus.push(new conf.CTA('Piccolo','postback','game.begin'));
menus.push(new conf.CTA('Devinettes','postback','Devinettes'));

conf.setPersistentMenu(menus);
conf.setGetStarted('getStarted');