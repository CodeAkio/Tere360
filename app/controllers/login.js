let login = require('../../config/auth').login;

module.exports = (app) => {
    let controller = {
        index: (req, res) => {
            res.render('login');
        },
        login: (req, res) => {
            let name = req.body.name;
            let password = req.body.password;

            login(name, password, (result) => {
                if (result) {
                    res.json(result);
                } else {
                    res.status(401).json({messagem: 'erro de autenticacao'});
                }
            })
        }
    }

    return controller;
}