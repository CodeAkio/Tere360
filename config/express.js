let express = require('express');
let load = require('express-load');
let bodyParser = require('body-parser');

let auth = require('./auth').auth;


module.exports = () => {
    let app = express();

    app.set('port', process.env.PORT);
    
    app.use(express.static('./public'));
    app.use(auth.initialize());
    app.use(bodyParser.json());
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    load('models', {cwd: 'app'})
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
};