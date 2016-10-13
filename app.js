var bot = require("./bottomatik/app.js");

Handlers.on('text', (m,u,s) => facebook.sendQuickMessage('coucou toi', u.id));

bottomatik.start(3880);